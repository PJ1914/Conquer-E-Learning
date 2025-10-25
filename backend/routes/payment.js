import express from "express";
import { createOrderHandler, verifyPaymentHandler } from "../controllers/paymentController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/create-order", verifyToken, createOrderHandler);
router.post("/verify", verifyPaymentHandler);

export default router;
