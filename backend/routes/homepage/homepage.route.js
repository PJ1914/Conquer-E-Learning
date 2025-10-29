import express from "express";
import {
  createHomepageStats,
  getHomepageStats,
  updateHomepageStats,
  deleteHomepageStats,
  createHomepagePopularCourses,
  getHomepagePopularCourses,
  updateHomepagePopularCourses,
  deleteHomepagePopularCourses,
  createHomepageLatestUpdates,
  getHomepageLatestUpdates,
  updateHomepageLatestUpdates,
  deleteHomepageLatestUpdates,
  createHomepagefaqs,
  getHomepagefaqs,
  updateHomepagefaqs,
  deleteHomepagefaqs,
} from "../../controllers/homepage/homepage.controller.js";

const router = express.Router();

// Homepage Stats Routes
router.post("/stats", createHomepageStats);
router.get("/stats", getHomepageStats);
router.put("/stats", updateHomepageStats);
router.delete("/stats", deleteHomepageStats);

// Homepage Popular Courses Routes
router.post("/popular-courses", createHomepagePopularCourses);
router.get("/popular-courses", getHomepagePopularCourses);
router.put("/popular-courses", updateHomepagePopularCourses);
router.delete("/popular-courses/:id", deleteHomepagePopularCourses);

// Home page Latest Updates Routes
router.post("/latest-updates", createHomepageLatestUpdates);
router.get("/latest-updates", getHomepageLatestUpdates);
router.put("/latest-updates", updateHomepageLatestUpdates);
router.delete("/latest-updates/:id", deleteHomepageLatestUpdates);

// Homepage FAQs Routes
router.post("/faqs", createHomepagefaqs);
router.get("/faqs", getHomepagefaqs);
router.put("/faqs", updateHomepagefaqs);
router.delete("/faqs/:id", deleteHomepagefaqs);

export default router;
