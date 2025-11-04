import Career from "../../models/homepage/careers.model.js";
import { AppError, ERROR_CODES } from "../../utils/AppError.js";

class CareersService {
  async createCareer(data) {
    const career = await Career.create(data);
    return career;
  }

  async getAllCareers() {
    const careers = await Career.find().populate("requirements");
    return careers;
  }

  async getCareerById(id) {
    const career = await Career.findById(id).populate("requirements");
    if (!career) {
      throw new AppError("Career not found", true, ERROR_CODES.NOT_FOUND, 404);
    }
    return career;
  }

  async updateCareer(id, updateData) {
    if (!id) {
      throw new AppError(
        "Career ID is required for update",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }

    const career = await Career.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).populate("requirements");

    if (!career) {
      throw new AppError("Career not found", true, ERROR_CODES.NOT_FOUND, 404);
    }
    return career;
  }

  async deleteCareer(id) {
    if (!id) {
      throw new AppError(
        "Career ID is required for deletion",
        true,
        ERROR_CODES.DATA_VALIDATION.MISSING_DATA,
        400
      );
    }
    const career = await Career.findByIdAndDelete(id);
    if (!career) {
      throw new AppError("Career not found", true, ERROR_CODES.NOT_FOUND, 404);
    }
    return career;
  }
}

export const careersService = new CareersService();



