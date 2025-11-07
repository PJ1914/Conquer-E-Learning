// backend/controllers/homepage/careers.controller.js
import { careersService } from "../../services/homepage/careers.service.js";
import { AppError } from "../../utils/AppError.js";

export const createCareer = async (req, res, next) => {
  try {
    const career = await careersService.createCareer(req.body);
    res.status(201).json({
      success: true,
      message: "Career created successfully",
      data: career,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCareers = async (req, res, next) => {
  try {
    const careers = await careersService.getAllCareers();
    res.status(200).json({ success: true, data: careers });
  } catch (error) {
    next(error);
  }
};

export const getCareerById = async (req, res, next) => {
  try {
    const career = await careersService.getCareerById(req.params.id);
    res.status(200).json({ success: true, data: career });
  } catch (error) {
    next(error);
  }
};

export const updateCareer = async (req, res, next) => {
  try {
    const updated = await careersService.updateCareer({
      id: req.params.id,
      ...req.body,
    });
    res.status(200).json({
      success: true,
      message: "Career updated successfully",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCareer = async (req, res, next) => {
  try {
    const deleted = await careersService.deleteCareer(req.params.id);
    res.status(200).json({
      success: true,
      message: "Career deleted successfully",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};

