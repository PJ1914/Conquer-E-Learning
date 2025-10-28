import crypto from "crypto";
import { createOrder } from "../services/paymentService.js";
import db from "../config/db.js";
import admin from "../config/firebase.js";
import { asyncHandler } from "../middleware/errorHandler.js";
import { AppError, ERROR_CODES } from "../utils/AppError.js";
import { sendSuccess } from "../utils/responseHelper.js";

export const createOrderHandler = asyncHandler(async (req, res) => {
  const order = await createOrder(req.body.amount);
  sendSuccess(res, { orderId: order.id });
});

export const verifyPaymentHandler = asyncHandler(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    throw new AppError(
      "Invalid signature",
      true,
      ERROR_CODES.DATA_VALIDATION.INVALID_DATA_TYPE,
      400
    );
  }

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
    amount: req.body.amount,
    timestamp: now.toISOString(),
    validUntil: validUntil.toISOString(),
  });

  sendSuccess(res, { success: true }, 200, "Payment verified successfully");
});
