import razorpay from "../config/razorpay.js";
import { AppError, ERROR_CODES } from "../utils/AppError.js";

/**
 * Razorpay-compatible fee engine.
 * - Razorpay Route-compatible fee engine
 */

/**
 * Attempts to lock all invoices in a batch
 * @param {Array<string>} invoiceIds - Array of invoice IDs to lock
 * @returns {Promise<{success: boolean, releaseAll: function}>} Object with success status and a release function
 */
export async function lockInvoices(invoiceIds) {
  // Implementation for invoice locking mechanism
  // This is a placeholder for actual locking logic
  const lockedInvoices = [];
  
  try {
    // Lock each invoice
    for (const invoiceId of invoiceIds) {
      // Add locking logic here (e.g., Redis lock, DB lock)
      lockedInvoices.push(invoiceId);
    }
    
    return {
      success: true,
      releaseAll: async () => {
        // Release all locked invoices
        for (const invoiceId of lockedInvoices) {
          // Add unlock logic here
        }
      }
    };
  } catch (error) {
    // Release any locked invoices in case of error
    for (const invoiceId of lockedInvoices) {
      // Add unlock logic here
    }
    throw error;
  }
}

/**
 * Creates an order in Razorpay
 * @param {Object} data - Order data
 * @param {ICreateOrder} data.project - Project details
 * @returns {Promise<Object>} Created order
 */
export const createOrder = async (data) => {
  try {
    const { project } = data;
    const order = await razorpay.orders.create({
      amount: project.amount * 100, // Convert to paise
      currency: project.currency || "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: project.notes || {},
    });
    return order;
  } catch (error) {
    throw new AppError(
      `Failed to create order: ${error.message}`,
      true,
      ERROR_CODES.DEFAULT_ERROR_CODE,
      500
    );
  }
};

/**
 * Creates a refund for a payment
 * @param {string} paymentId - Payment ID
 * @param {number} amount - Refund amount
 * @returns {Promise<Object>} Refund details
 */
export const createRefund = async (paymentId, amount) => {
  try {
    const refund = await razorpay.payments.refund(paymentId, {
      amount: amount * 100, // Convert to paise
      speed: "normal",
    });
    return refund;
  } catch (error) {
    throw new AppError(
      `Failed to create refund: ${error.message}`,
      true,
      ERROR_CODES.DEFAULT_ERROR_CODE,
      500
    );
  }
};

/**
 * Retrieves payment details from Razorpay
 * @param {string} paymentId - Payment ID
 * @returns {Promise<Object>} Payment details
 */
export const getPaymentDetails = async (paymentId) => {
  try {
    const payment = await razorpay.payments.fetch(paymentId);
    return payment;
  } catch (error) {
    throw new AppError(
      error?.error?.description || "Failed to get payment details",
      true,
      ERROR_CODES.DEFAULT_ERROR_CODE,
      500
    );
  }
};

/**
 * Retrieves order details from Razorpay
 * @param {string} orderId - Order ID
 * @returns {Promise<Object>} Order details
 */
export const getOrderDetails = async (orderId) => {
  try {
    const order = await razorpay.orders.fetch(orderId);
    return order;
  } catch (error) {
    throw new AppError(
      `Failed to get order details: ${error.message}`,
      true,
      ERROR_CODES.DEFAULT_ERROR_CODE,
      500
    );
  }
};

/**
 * Gets payment status
 * @param {string} paymentId - Payment ID
 * @returns {Promise<Object>} Payment status
 */
export const getPaymentStatus = async (paymentId) => {
  try {
    const payment = await razorpay.payments.fetch(paymentId);
    return {
      status: payment.status,
      amount: payment.amount / 100, // Convert from paise
      currency: payment.currency,
      method: payment.method,
      captured: payment.captured,
      createdAt: payment.created_at,
    };
  } catch (error) {
    throw new AppError(
      `Failed to get payment status: ${error.message}`,
      true,
      ERROR_CODES.DEFAULT_ERROR_CODE,
      500
    );
  }
};

/**
 * Calculates total fee including transfer fee, GST, and transaction fee
 * @param {number} transferFee - Transfer fee percentage (default 0.25)
 * @param {number} gst - GST percentage (default 18)
 * @param {number} transactionFee - Transaction fee percentage
 * @param {number} amount - Base amount
 * @returns {number} Total calculated fee
 */
export const calculateTotalFee = (transferFee, gst, transactionFee, amount) => {
  // Default values
  const transferFeePercent = transferFee || 0.25;
  const gstPercent = gst || 18;
  
  // Calculate fees
  const baseFee = (amount * transferFeePercent) / 100;
  const gstAmount = (baseFee * gstPercent) / 100;
  const transactionFeeAmount = transactionFee ? (amount * transactionFee) / 100 : 0;
  
  return baseFee + gstAmount + transactionFeeAmount;
};

/**
 * Round ups to the next paisa (₹0.01), x/.
 * @param {Decimal} x - Decimal amount
 * @returns {Decimal} Rounded up amount
 */
export const getCellPaisa = (x) => {
  const base = typeof x === 'number' ? x : parseFloat(x);
  return Math.ceil(base * 100) / 100;
};

/**
 * "Tiny-GST" rule: if GST < 0.009 ≈ zero, else ceil-paisa.
 * @param {Decimal} base - Base amount
 * @param {number} gstPct - GST percentage (default 18)
 * @returns {Decimal} Calculated GST amount
 */
export const gstWithTinyRule = (base, gstPct) => {
  const gstPercent = gstPct || 18;
  const gstAmount = (base * gstPercent) / 100;
  
  // If GST is less than 0.009, treat as zero
  if (gstAmount < 0.009) {
    return 0;
  }
  
  // Otherwise, round up to next paisa
  return getCellPaisa(gstAmount);
};

/**
 * Calculates the total payable amount including all fees
 * @param {Object} params - Calculation parameters
 * @param {number} params.creditAmount - Base credit amount
 * @param {number} params.transferPct - Transfer fee percentage (default 0.25)
 * @param {number} params.gstPct - GST percentage (default 18)
 * @param {string} params.paymentOption - Payment option type
 * @returns {Object} Detailed breakdown of payable amount
 */
export function calcPayable({
  creditAmount,
  transferPct = 0.25,
  gstPct = 18,
  paymentOption
}) {
  // Convert to number if needed
  const amount = typeof creditAmount === 'number' ? creditAmount : parseFloat(creditAmount);
  
  // Calculate transfer fee
  const transferFee = (amount * transferPct) / 100;
  
  // Calculate GST with tiny rule
  const gstAmount = gstWithTinyRule(transferFee, gstPct);
  
  // Calculate transaction fee based on payment option
  let transactionFeePercent = 0;
  let transactionFeeAmount = 0;
  
  if (paymentOption) {
    // Add specific payment option fees (e.g., UPI, card, etc.)
    // This can be customized based on your payment gateway's fee structure
    const paymentOptionFees = {
      'upi': 0,
      'card': 2,
      'netbanking': 1.5,
      'wallet': 1,
    };
    
    transactionFeePercent = paymentOptionFees[paymentOption.toLowerCase()] || 0;
    transactionFeeAmount = (amount * transactionFeePercent) / 100;
  }
  
  // Calculate total
  const totalFee = transferFee + gstAmount + transactionFeeAmount;
  const totalPayable = getCellPaisa(amount + totalFee);
  
  return {
    creditAmount: amount,
    transferFee: getCellPaisa(transferFee),
    transferPct,
    gstAmount: getCellPaisa(gstAmount),
    gstPct,
    transactionFee: getCellPaisa(transactionFeeAmount),
    transactionFeePercent,
    totalFee: getCellPaisa(totalFee),
    totalPayable,
    breakdown: {
      base: amount,
      fees: {
        transfer: getCellPaisa(transferFee),
        gst: getCellPaisa(gstAmount),
        transaction: getCellPaisa(transactionFeeAmount),
      },
      total: totalPayable,
    }
  };
}
