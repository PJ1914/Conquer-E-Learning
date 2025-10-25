import crypto from "crypto";
import { createOrder } from "../services/paymentService.js";
import db from "../config/db.js";
import admin from "../config/firebase.js";

export const createOrderHandler = async (req, res) => {
  try {
    const order = await createOrder(req.body.amount);
    res.json({ orderId: order.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const verifyPaymentHandler = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).send("Invalid signature");
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

  res.status(200).json({ success: true });
};
