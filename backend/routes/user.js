// TODO: Change the template code
import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import authorizeRole from "../middleware/authorizeRole.js";

const router = express.Router();

router.get("/premium", verifyToken, authorizeRole(["paid", "admin"]), (req, res) => {
  res.json({ message: "Welcome, premium user!" });
});

export default router;
