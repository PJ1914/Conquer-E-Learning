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
  createHomepagefaqs,
  getHomepagefaqs,
  updateHomepagefaqs,
  deleteHomepagefaqs,
  createwhyChooseUs,
  getwhyChooseUs,
  updatewhyChooseUs,
  deletewhyChooseUs,
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
router.delete("/popular-courses", deleteHomepagePopularCourses);

// Homepage FAQs Routes
router.post("/faqs", createHomepagefaqs);
router.get("/faqs", getHomepagefaqs);
router.put("/faqs", updateHomepagefaqs);
router.delete("/faqs", deleteHomepagefaqs);

// Why Choose Us Routes
router.post("/why-choose-us", createwhyChooseUs);
router.get("/why-choose-us", getwhyChooseUs);
router.put("/why-choose-us", updatewhyChooseUs);
router.delete("/why-choose-us", deletewhyChooseUs);

export default router;
