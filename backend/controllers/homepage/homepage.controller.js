import {
  HomepageStatsService,
  HomepagePopularCoursesService,
  HomepageLatestUpdatesService,
  HomepagefaqsService,
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
  const result = await HomepagePopularCoursesService.deleteHomepagePopularCourses(req.params.id);
  sendSuccess(res, result, 200, "Popular courses deleted successfully");
});

// Homepage latest updates
export const createHomepageLatestUpdates = asyncHandler(async (req, res) => {
  const result = await HomepageLatestUpdatesService.createHomepageLatestUpdates(req.body);
  sendCreated(res, result, "Latest updates created successfully");
});

export const getHomepageLatestUpdates = asyncHandler(async (req, res) => {
  const result = await HomepageLatestUpdatesService.getHomepageLatestUpdates();
  sendSuccess(res, result);
}
);

export const updateHomepageLatestUpdates = asyncHandler(async (req, res) => {
  const result = await HomepageLatestUpdatesService.updateHomepageLatestUpdates(req.body);
  sendSuccess(res, result, 200, "Latest updates updated successfully");
});

export const deleteHomepageLatestUpdates = asyncHandler(async (req, res) => {
  const result = await HomepageLatestUpdatesService.deleteHomepageLatestUpdates(req.params.id);
  sendSuccess(res, result, 200, "Latest updates deleted successfully");
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
  const result = await HomepagefaqsService.deleteHomepagefaqs(req.params.id);
  sendSuccess(res, result, 200, "FAQs deleted successfully");
});
