import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDB from "./config/mongodb.js";
import paymentRoutes from "./routes/payment.js";
import userRoutes from "./routes/user.js";
import homepageRoutes from "./routes/homepage/homepage.route.js";
import careersRoutes from "./routes/homepage/careers.route.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import "./jobs/subscriptionCron.js"; // auto start cron

dotenv.config();

// Connect to MongoDB
connectMongoDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/homepage", homepageRoutes);
app.use("/api/careers", careersRoutes);

// Error handling middleware (must be after all routes)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

