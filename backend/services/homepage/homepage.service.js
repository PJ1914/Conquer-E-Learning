import {
  HomepageStats,
  HomepagePopularCourses,
  HomepageFaqs,
} from "../../models/index.js";
import { AppError, ERROR_CODES } from "../../utils/AppError.js";

// Stats services
class HomepageStatsService {
  async createHomepageStats(data) {
    const stats = await HomepageStats.create(data);
    return stats;
  }

  async getHomepageStats() {
    const stats = await HomepageStats.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(1);
    return stats.length > 0 ? stats[0] : null;
  }

  async updateHomepageStats(data) {
    const stats = await HomepageStats.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!stats || stats.length === 0) {
      throw new AppError(
        "Homepage stats not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    const updatedStats = await HomepageStats.findByIdAndUpdate(
      stats[0]._id,
      data,
      { new: true, runValidators: true }
    );

    return updatedStats;
  }

  async deleteHomepageStats() {
    const stats = await HomepageStats.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!stats || stats.length === 0) {
      throw new AppError(
        "Homepage stats not found",
        true,
        ERROR_CODES.NOT_FOUND,
        404
      );
    }

    // Soft delete
    const deletedStats = await HomepageStats.findByIdAndUpdate(
      stats[0]._id,
      { isActive: false },
      { new: true }
    );

    return deletedStats;
  }
}

// Popular Courses services
class HomepagePopularCoursesService {
  async createHomepagePopularCourses(data) {
    const course = await HomepagePopularCourses.create(data);
    return course;
  }

  async getHomepagePopularCourses() {
    const courses = await HomepagePopularCourses.find({ isActive: true })
      .sort({ displayOrder: 1, createdAt: -1 })
      .lean();
    return courses;
  }

  async updateHomepagePopularCourses(data) {
    const { id, ...updateData } = data;

    if (!id) {
      throw new AppError(
        "Course ID is required for update",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const course = await HomepagePopularCourses.findByIdAndUpdate(
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

  async deleteHomepagePopularCourses(id) {
    if (!id) {
      throw new AppError(
        "Course ID is required for deletion",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const course = await HomepagePopularCourses.findByIdAndUpdate(
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
class HomepageLatestUpdatesService {
  async createHomepageLatestUpdates(data) {
    const update = await HomepageLatestUpdates.create(data);
    return update;
  }

  async getHomepageLatestUpdates() {
    const updates = await HomepageLatestUpdates.find({ isActive: true })
      .sort({ publishedDate: -1 })
      .lean();
    return updates;
  }

  async updateHomepageLatestUpdates(data) {
    const { id, ...updateData } = data;

    if (!id) {
      throw new AppError(
        "Update ID is required for update",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const update = await HomepageLatestUpdates.findByIdAndUpdate(
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

  async deleteHomepageLatestUpdates(id) {
    if (!id) {
      throw new AppError(
        "Update ID is required for deletion",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const update = await HomepageLatestUpdates.findByIdAndUpdate(
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
class HomepagefaqsService {
  async createHomepagefaqs(data) {
    const faq = await HomepageFaqs.create(data);
    return faq;
  }

  async getHomepagefaqs() {
    const faqs = await HomepageFaqs.find({ isActive: true })
      .sort({ displayOrder: 1, createdAt: -1 })
      .lean();
    return faqs;
  }

  async updateHomepagefaqs(data) {
    const { id, ...updateData } = data;

    if (!id) {
      throw new AppError(
        "FAQ ID is required for update",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const faq = await HomepageFaqs.findByIdAndUpdate(
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

  async deleteHomepagefaqs(id) {
    if (!id) {
      throw new AppError(
        "FAQ ID is required for deletion",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const faq = await HomepageFaqs.findByIdAndUpdate(
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

export const HomepageStatsService = new HomepageStatsService();
export const HomepagePopularCoursesService = new HomepagePopularCoursesService();
export const HomepageLatestUpdatesService = new HomepageLatestUpdatesService();
export const HomepagefaqsService = new HomepagefaqsService();