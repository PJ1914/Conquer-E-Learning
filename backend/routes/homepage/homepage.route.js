import express from "express";
import {
  StatsController,
  PopularCoursesController,
  LatestUpdatesController,
  FaqsController,
} from "../../controllers/homepage/homepage.controller.js";

const router = express.Router();

// Homepage Stats Routes
router.post("/stats", StatsController.create);
router.get("/stats", StatsController.get);
router.put("/stats", StatsController.update);
router.delete("/stats", StatsController.delete);

// Homepage Popular Courses Routes
router.post("/popular-courses", PopularCoursesController.create);
router.get("/popular-courses", PopularCoursesController.get);
router.put("/popular-courses", PopularCoursesController.update);
router.delete("/popular-courses/:id", PopularCoursesController.delete);

// Home page Latest Updates Routes
router.post("/latest-updates", LatestUpdatesController.create);
router.get("/latest-updates", LatestUpdatesController.get);
router.put("/latest-updates", LatestUpdatesController.update);
router.delete("/latest-updates/:id", LatestUpdatesController.delete);

// Homepage FAQs Routes
router.post("/faqs", FaqsController.create);
router.get("/faqs", FaqsController.get);
router.put("/faqs", FaqsController.update);
router.delete("/faqs/:id", FaqsController.delete);

export default router;
