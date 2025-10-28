import {
  HomepageStatsService,
  HomepagePopularCoursesService,
  HomepagefaqsService,
  whyChooseUsService,
} from "../../services/homepage/homepage.service.js";
import { asyncHandler } from "../../middleware/errorHandler.js";
import { sendSuccess, sendCreated } from "../../utils/responseHelper.js";

// Homepage Stats Controllers
export const createHomepageStats = asyncHandler(async (req, res) => {
  const result = await HomepageStatsService.createHomepageStats(req.body);
  sendCreated(res, result, "Homepage stats created successfully");
});

export const getHomepageStats = asyncHandler(async (req, res) => {
  const result = await HomepageStatsService.getHomepageStats();
  sendSuccess(res, result);
});

export const updateHomepageStats = asyncHandler(async (req, res) => {
  const result = await HomepageStatsService.updateHomepageStats(req.body);
  sendSuccess(res, result, 200, "Homepage stats updated successfully");
});

export const deleteHomepageStats = asyncHandler(async (req, res) => {
  await HomepageStatsService.deleteHomepageStats();
  sendSuccess(res, null, 200, "Stats deleted successfully");
});

// Homepage Popular Courses Controllers
export const createHomepagePopularCourses = asyncHandler(async (req, res) => {
  const result = await HomepagePopularCoursesService.createHomepagePopularCourses(req.body);
  sendCreated(res, result, "Popular courses created successfully");
});

export const getHomepagePopularCourses = asyncHandler(async (req, res) => {
  const result = await HomepagePopularCoursesService.getHomepagePopularCourses();
  sendSuccess(res, result);
});

export const updateHomepagePopularCourses = asyncHandler(async (req, res) => {
  const result = await HomepagePopularCoursesService.updateHomepagePopularCourses(req.body);
  sendSuccess(res, result, 200, "Popular courses updated successfully");
});

export const deleteHomepagePopularCourses = asyncHandler(async (req, res) => {
  await HomepagePopularCoursesService.deleteHomepagePopularCourses();
  sendSuccess(res, null, 200, "Popular courses deleted successfully");
});

// Homepage FAQs Controllers
export const createHomepagefaqs = asyncHandler(async (req, res) => {
  const result = await HomepagefaqsService.createHomepagefaqs(req.body);
  sendCreated(res, result, "FAQs created successfully");
});

export const getHomepagefaqs = asyncHandler(async (req, res) => {
  const result = await HomepagefaqsService.getHomepagefaqs();
  sendSuccess(res, result);
});

export const updateHomepagefaqs = asyncHandler(async (req, res) => {
  const result = await HomepagefaqsService.updateHomepagefaqs(req.body);
  sendSuccess(res, result, 200, "FAQs updated successfully");
});

export const deleteHomepagefaqs = asyncHandler(async (req, res) => {
  await HomepagefaqsService.deleteHomepagefaqs();
  sendSuccess(res, null, 200, "FAQs deleted successfully");
});

// Why Choose Us Controllers
export const createwhyChooseUs = asyncHandler(async (req, res) => {
  const result = await whyChooseUsService.createwhyChooseUs(req.body);
  sendCreated(res, result, "Why Choose Us created successfully");
});

export const getwhyChooseUs = asyncHandler(async (req, res) => {
  const result = await whyChooseUsService.getwhyChooseUs();
  sendSuccess(res, result);
});

export const updatewhyChooseUs = asyncHandler(async (req, res) => {
  const result = await whyChooseUsService.updatewhyChooseUs(req.body);
  sendSuccess(res, result, 200, "Why Choose Us updated successfully");
});

export const deletewhyChooseUs = asyncHandler(async (req, res) => {
  await whyChooseUsService.deletewhyChooseUs();
  sendSuccess(res, null, 200, "Why Choose Us deleted successfully");
});
