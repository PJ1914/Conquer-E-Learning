import {
  Stats,
  PopularCourses,
  LatestUpdates,
  Faqs,
} from "../../models/index.js";
import { AppError, ERROR_CODES } from "../../utils/AppError.js";

// Stats services
class StatsService {
  async createStats(data) {
    const stats = await Stats.create(data);
    return stats;
  }

  async getStats() {
    const stats = await Stats.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(1);
    return stats.length > 0 ? stats[0] : null;
  }

  async updateStats(data) {
    const stats = await Stats.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!stats || stats.length === 0) {
      throw new AppError(
        "stats not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    const updatedStats = await Stats.findByIdAndUpdate(
      stats[0]._id,
      data,
      { new: true, runValidators: true }
    );

    return updatedStats;
  }

  async deleteStats() {
    const stats = await Stats.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!stats || stats.length === 0) {
      throw new AppError(
        "stats not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    // Soft delete
    const deletedStats = await Stats.findByIdAndUpdate(
      stats[0]._id,
      { isActive: false },
      { new: true }
    );

    return deletedStats;
  }
}

// Popular Courses services
class PopularCoursesService {
  async createCourse(data) {
    const course = await PopularCourses.create(data);
    return course;
  }

  async getCourses() {
    const courses = await PopularCourses.find({ isActive: true })
      .sort({ displayOrder: 1, createdAt: -1 })
      .lean();
    return courses;
  }

  async updateCourse(data) {
    const { id, ...updateData } = data;

    if (!id) {
      throw new AppError(
        "Course ID is required for update",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const course = await PopularCourses.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!course) {
      throw new AppError(
        "Popular course not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    return course;
  }

  async deleteCourse(id) {
    if (!id) {
      throw new AppError(
        "Course ID is required for deletion",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const course = await PopularCourses.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!course) {
      throw new AppError(
        "Popular course not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    return course;
  }
}

// Latest Updates services
class LatestUpdatesService {
  async createLatestUpdates(data) {
    const update = await LatestUpdates.create(data);
    return update;
  }

  async getLatestUpdates() {
    const updates = await LatestUpdates.find({ isActive: true })
      .sort({ publishedDate: -1 })
      .lean();
    return updates;
  }

  async updateLatestUpdates(data) {
    const { id, ...updateData } = data;

    if (!id) {
      throw new AppError(
        "Update ID is required for update",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const update = await LatestUpdates.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!update) {
      throw new AppError(
        "Latest update not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    return update;
  }

  async deleteLatestUpdates(id) {
    if (!id) {
      throw new AppError(
        "Update ID is required for deletion",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const update = await LatestUpdates.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!update) {
      throw new AppError(
        "Latest update not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    return update;
  }
}

// FAQs services
class FaqsService {
  async createfaqs(data) {
    const faq = await Faqs.create(data);
    return faq;
  }

  async getfaqs() {
    const faqs = await Faqs.find({ isActive: true })
      .sort({ displayOrder: 1, createdAt: -1 })
      .lean();
    return faqs;
  }

  async updatefaqs(data) {
    const { id, ...updateData } = data;

    if (!id) {
      throw new AppError(
        "FAQ ID is required for update",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const faq = await Faqs.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!faq) {
      throw new AppError(
        "FAQ not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    return faq;
  }

  async deletefaqs(id) {
    if (!id) {
      throw new AppError(
        "FAQ ID is required for deletion",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const faq = await Faqs.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!faq) {
      throw new AppError(
        "FAQ not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    return faq;
  }
}

export const StatsService = new StatsService();
export const PopularCoursesService = new PopularCoursesService();
export const LatestUpdatesService = new LatestUpdatesService();
export const FaqsService = new FaqsService();