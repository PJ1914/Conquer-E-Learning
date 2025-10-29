import express from "express";
import {
  createOrderHandler,
  verifyPaymentHandler,
  getPaymentDetailsHandler,
  getOrderDetailsHandler,
  getPaymentStatusHandler,
  createRefundHandler,
  calculatePayableHandler,
} from "../controllers/paymentController.js";
import verifyToken from "../middleware/verifyToken.js";
import authorizeRole from "../middleware/authorizeRole.js";

const router = express.Router();

// Order management
router.post("/create-order", verifyToken, createOrderHandler);
router.get("/order/:orderId", verifyToken, getOrderDetailsHandler);

// Payment verification and details
router.post("/verify", verifyPaymentHandler);
router.get("/payment/:paymentId", verifyToken, getPaymentDetailsHandler);
router.get("/status/:paymentId", verifyToken, getPaymentStatusHandler);

// Refund management (admin only)
router.post("/refund", verifyToken, authorizeRole(["admin"]), createRefundHandler);

// Fee calculation (public)
router.post("/calculate-payable", calculatePayableHandler);

export default router;
