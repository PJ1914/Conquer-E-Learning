import crypto from "crypto";
import {
  createOrder,
  createRefund,
  getPaymentDetails,
  getOrderDetails,
  getPaymentStatus,
  calcPayable,
  calculateTotalFee,
} from "../services/paymentService.js";
import db from "../config/db.js";
import admin from "../config/firebase.js";
import { asyncHandler } from "../middleware/errorHandler.js";
import { AppError, ERROR_CODES } from "../utils/AppError.js";
import { sendSuccess, sendCreated } from "../utils/responseHelper.js";

/**
 * Creates a new order with calculated fees
 */
export const createOrderHandler = asyncHandler(async (req, res) => {
  const { amount, currency, notes, paymentOption } = req.body;

  if (!amount || amount <= 0) {
    throw new AppError(
      "Valid amount is required",
      true,
      ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
      400
    );
  }

  // Calculate payable amount with fees
  const feeCalculation = calcPayable({
    creditAmount: amount,
    transferPct: 0.25,
    gstPct: 18,
    paymentOption: paymentOption || "upi",
  });

  // Create order with total payable amount
  const order = await createOrder({
    project: {
      amount: feeCalculation.totalPayable,
      currency: currency || "INR",
      notes: {
        ...notes,
        originalAmount: amount,
        fees: feeCalculation.totalFee,
        paymentOption: paymentOption,
      },
    },
  });

  sendCreated(
    res,
    {
      orderId: order.id,
      amount: order.amount / 100,
      currency: order.currency,
      feeBreakdown: feeCalculation,
    },
    "Order created successfully"
  );
});

/**
 * Verifies payment signature and updates user
 */
export const verifyPaymentHandler = asyncHandler(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !userId) {
    throw new AppError(
      "Missing required payment verification parameters",
      true,
      ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
      400
    );
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    throw new AppError(
      "Invalid payment signature",
      true,
      ERROR_CODES.DATA_VALIDATION.INVALID_DATA_TYPE,
      400
    );
  }

  // Get payment details from Razorpay
  const paymentDetails = await getPaymentDetails(razorpay_payment_id);

  // Update user to paid
  await admin.auth().setCustomUserClaims(userId, { role: "paid" });

  // Store timeline entry
  const now = new Date();
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);

  await db.collection("user_timeline").add({
    userId,
    roleBefore: "normal",
    roleAfter: "paid",
    amount: paymentDetails.amount / 100,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
    paymentMethod: paymentDetails.method,
    timestamp: now.toISOString(),
    validUntil: validUntil.toISOString(),
  });

  sendSuccess(
    res,
    {
      success: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      amount: paymentDetails.amount / 100,
      validUntil: validUntil.toISOString(),
    },
    200,
    "Payment verified successfully"
  );
});

/**
 * Gets payment details by payment ID
 */
export const getPaymentDetailsHandler = asyncHandler(async (req, res) => {
  const { paymentId } = req.params;

  if (!paymentId) {
    throw new AppError(
      "Payment ID is required",
      true,
      ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
      400
    );
  }

  const payment = await getPaymentDetails(paymentId);

  sendSuccess(res, {
    paymentId: payment.id,
    amount: payment.amount / 100,
    currency: payment.currency,
    status: payment.status,
    method: payment.method,
    email: payment.email,
    contact: payment.contact,
    createdAt: payment.created_at,
  });
});

/**
 * Gets order details by order ID
 */
export const getOrderDetailsHandler = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    throw new AppError(
      "Order ID is required",
      true,
      ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
      400
    );
  }

  const order = await getOrderDetails(orderId);

  sendSuccess(res, {
    orderId: order.id,
    amount: order.amount / 100,
    currency: order.currency,
    status: order.status,
    receipt: order.receipt,
    notes: order.notes,
    createdAt: order.created_at,
  });
});

/**
 * Gets payment status
 */
export const getPaymentStatusHandler = asyncHandler(async (req, res) => {
  const { paymentId } = req.params;

  if (!paymentId) {
    throw new AppError(
      "Payment ID is required",
      true,
      ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
      400
    );
  }

  const status = await getPaymentStatus(paymentId);
  sendSuccess(res, status);
});

/**
 * Creates a refund for a payment
 */
export const createRefundHandler = asyncHandler(async (req, res) => {
  const { paymentId, amount, reason } = req.body;

  if (!paymentId) {
    throw new AppError(
      "Payment ID is required",
      true,
      ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
      400
    );
  }

  // Get payment details to validate refund amount
  const payment = await getPaymentDetails(paymentId);
  const maxRefundAmount = payment.amount / 100;

  if (amount && amount > maxRefundAmount) {
    throw new AppError(
      `Refund amount cannot exceed payment amount of ${maxRefundAmount}`,
      true,
      ERROR_CODES.DATA_VALIDATION.INVALID_DATA_TYPE,
      400
    );
  }

  const refund = await createRefund(paymentId, amount || maxRefundAmount);

  // Store refund entry in Firestore
  await db.collection("refunds").add({
    refundId: refund.id,
    paymentId: paymentId,
    amount: refund.amount / 100,
    reason: reason || "Requested by user",
    status: refund.status,
    createdAt: new Date().toISOString(),
  });

  sendCreated(
    res,
    {
      refundId: refund.id,
      paymentId: refund.payment_id,
      amount: refund.amount / 100,
      status: refund.status,
    },
    "Refund created successfully"
  );
});

/**
 * Calculates payable amount with fee breakdown
 */
export const calculatePayableHandler = asyncHandler(async (req, res) => {
  const { amount, paymentOption, transferPct, gstPct } = req.body;

  if (!amount || amount <= 0) {
    throw new AppError(
      "Valid amount is required",
      true,
      ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
      400
    );
  }

  const calculation = calcPayable({
    creditAmount: amount,
    transferPct: transferPct || 0.25,
    gstPct: gstPct || 18,
    paymentOption: paymentOption || "upi",
  });

  sendSuccess(res, calculation);
});
