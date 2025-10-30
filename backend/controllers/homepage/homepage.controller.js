import {
  StatsService,
  PopularCoursesService,
  LatestUpdatesService,
  FaqsService,
} from "../../services/homepage/homepage.service.js";
import { asyncHandler } from "../../middleware/errorHandler.js";
import { sendSuccess, sendCreated } from "../../utils/responseHelper.js";

// Stats Controllers
export const StatsController = {

  create: asyncHandler(async (req, res) => {
    const result = await StatsService.createStats(req.body);
    sendCreated(res, result, "Homepage stats created successfully");
  }),

  get : asyncHandler(async (req, res) => {
    const result = await StatsService.getStats();
    sendSuccess(res, result);
  }),

  update : asyncHandler(async (req, res) => {
    const result = await StatsService.updateStats(req.body);
    sendSuccess(res, result, 200, "Homepage stats updated successfully");
  }),

  delete:  asyncHandler(async (req, res) => {
    await StatsService.deleteStats();
    sendSuccess(res, null, 200, "Stats deleted successfully");
  })
};

// Popular Courses Controllers
export const PopularCoursesController = {
  create: asyncHandler(async (req, res) => {
    const result = await PopularCoursesService.createCourse(req.body);
    sendCreated(res, result, "Popular courses created successfully");
  }),
  
  get: asyncHandler(async (req, res) => {
    const result = await PopularCoursesService.getCourses();
    sendSuccess(res, result);
  }),

  update: asyncHandler(async (req, res) => {
    const result = await PopularCoursesService.updateCourse(req.body);
    sendSuccess(res, result, 200, "Popular courses updated successfully");
  }),

  delete: asyncHandler(async (req, res) => {
    const result = await PopularCoursesService.deleteCourse(req.params.id);
    sendSuccess(res, result, 200, "Popular courses deleted successfully");
  }),

}

// Latest Updates Controllers
export const LatestUpdatesController = {
  create: asyncHandler(async (req, res) => {
    const result = await LatestUpdatesService.createLatestUpdates(req.body);
    sendCreated(res, result, "Latest updates created successfully");
  }),

  get: asyncHandler(async (req, res) => {
    const result = await LatestUpdatesService.getLatestUpdates();
    sendSuccess(res, result);
  }),
  update: asyncHandler(async (req, res) => {
      const result = await LatestUpdatesService.updateLatestUpdates(req.body);
    sendSuccess(res, result, 200, "Latest updates updated successfully");
  }),

  delete: asyncHandler(async (req, res) => {
    const result = await LatestUpdatesService.deleteLatestUpdates(req.params.id);
    sendSuccess(res, result, 200, "Latest updates deleted successfully");
  })
}

// FAQs Controllers
export const FaqsController = {
  create: asyncHandler(async (req, res) => {
    const result = await FaqsService.createfaqs(req.body);
    sendCreated(res, result, "FAQs created successfully");
  }),

  get: asyncHandler(async (req, res) => {
    const result = await FaqsService.getfaqs();
    sendSuccess(res, result);
  }),

  update: asyncHandler(async (req, res) => {
    const result = await FaqsService.updatefaqs(req.body);
    sendSuccess(res, result, 200, "FAQs updated successfully");
  }),

  delete: asyncHandler(async (req, res) => {
    const result = await FaqsService.deletefaqs(req.params.id);
    sendSuccess(res, result, 200, "FAQs deleted successfully");
  })
}
