import { DEFAULT_SUCCESS_CODE } from "./AppError.js";

/**
 * Standardized success response
 * @param {Object} res - Express response object
 * @param {*} data - Data to send in response
 * @param {number} statusCode - HTTP status code (default: 200)
 * @param {string} message - Optional success message
 */
export const sendSuccess = (res, data, statusCode = 200, message = null) => {
  res.status(statusCode).json({
    success: true,
    code: DEFAULT_SUCCESS_CODE,
    ...(message && { message }),
    data,
  });
};

/**
 * Standardized response for created resources
 * @param {Object} res - Express response object
 * @param {*} data - Created resource data
 * @param {string} message - Optional success message
 */
export const sendCreated = (res, data, message = "Resource created successfully") => {
  sendSuccess(res, data, 201, message);
};
