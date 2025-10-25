import razorpay from "../config/razorpay.js";

export async function createOrder(amount) {
  return await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: "rcpt_" + Date.now(),
  });
}
