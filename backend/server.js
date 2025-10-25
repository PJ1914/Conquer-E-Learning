import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.js";
import userRoutes from "./routes/user.js";
import "./jobs/subscriptionCron.js"; // auto start cron

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
