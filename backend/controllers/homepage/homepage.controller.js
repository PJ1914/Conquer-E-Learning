import {
  statsService,
  popularCoursesService,
  latestUpdatesService,
  faqsService,
} from "../../services/homepage/homepage.service.js";
import { asyncHandler } from "../../middleware/errorHandler.js";
import { sendSuccess, sendCreated } from "../../utils/responseHelper.js";

// Stats Controllers
export const StatsController = {

  create: asyncHandler(async (req, res) => {
    const result = await statsService.createStats(req.body);
    sendCreated(res, result, "Homepage stats created successfully");
  }),

  get : asyncHandler(async (req, res) => {
    const result = await statsService.getStats();
    sendSuccess(res, result);
  }),

  update : asyncHandler(async (req, res) => {
    const result = await statsService.updateStats(req.body);
    sendSuccess(res, result, 200, "Homepage stats updated successfully");
  }),

  delete:  asyncHandler(async (req, res) => {
    await statsService.deleteStats(req.body);
    sendSuccess(res, null, 200, "Stats deleted successfully");
  })
};

// Popular Courses Controllers
export const PopularCoursesController = {
  create: asyncHandler(async (req, res) => {
    const result = await popularCoursesService.createCourse(req.body);
    sendCreated(res, result, "Popular courses created successfully");
  }),
  
  get: asyncHandler(async (req, res) => {
    const result = await popularCoursesService.getCourses();
    sendSuccess(res, result);
  }),

  update: asyncHandler(async (req, res) => {
    const result = await popularCoursesService.updateCourse(req.body);
    sendSuccess(res, result, 200, "Popular courses updated successfully");
  }),

  delete: asyncHandler(async (req, res) => {
    const result = await popularCoursesService.deleteCourse(req.params.id);
    sendSuccess(res, result, 200, "Popular courses deleted successfully");
  }),

}

// Latest Updates Controllers
export const LatestUpdatesController = {
  create: asyncHandler(async (req, res) => {
    const result = await latestUpdatesService.createLatestUpdates(req.body);
    sendCreated(res, result, "Latest updates created successfully");
  }),

  get: asyncHandler(async (req, res) => {
    const result = await latestUpdatesService.getLatestUpdates();
    sendSuccess(res, result);
  }),
  update: asyncHandler(async (req, res) => {
    const result = await latestUpdatesService.updateLatestUpdates(req.body);
    sendSuccess(res, result, 200, "Latest updates updated successfully");
  }),

  delete: asyncHandler(async (req, res) => {
    const result = await latestUpdatesService.deleteLatestUpdates(req.params.id);
    sendSuccess(res, result, 200, "Latest updates deleted successfully");
  })
}

// FAQs Controllers
export const FaqsController = {
  create: asyncHandler(async (req, res) => {
    const result = await faqsService.createfaqs(req.body);
    sendCreated(res, result, "FAQs created successfully");
  }),

  get: asyncHandler(async (req, res) => {
    const result = await faqsService.getfaqs();
    sendSuccess(res, result);
  }),

  update: asyncHandler(async (req, res) => {
    const result = await faqsService.updatefaqs(req.body);
    sendSuccess(res, result, 200, "FAQs updated successfully");
  }),

  delete: asyncHandler(async (req, res) => {
    const result = await faqsService.deletefaqs(req.params.id);
    sendSuccess(res, result, 200, "FAQs deleted successfully");
  })
}
