import { AppError, ERROR_CODES } from "../utils/AppError.js";

/**
 * Async handler wrapper to catch errors in async route handlers
 * @param {Function} fn - Async function to wrap
 * @returns {Function} Express middleware function
 */
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Global error handling middleware
 * Should be added after all routes in server.js
 */
export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  error.stack = err.stack;

  // Log error for debugging (can be replaced with a logger like Winston) !TODO
  console.error("Error:", err);

  // Default values
  let statusCode = err.statusCode || 500;
  let code = err.code || ERROR_CODES.DEFAULT_ERROR_CODE;
  let message = err.message || "Internal Server Error";

  // Mongoose duplicate key error
  if (err.code === ERROR_CODES.MONGO_ERROR_CODES.UNIQUE_CONSTRAINT) {
    message = "Duplicate field value entered";
    statusCode = 400;
    code = ERROR_CODES.MONGO_ERROR_CODES.UNIQUE_CONSTRAINT;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    statusCode = 400;
    code = ERROR_CODES.DATA_VALIDATION.INVALID_DATA_TYPE;
  }

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    message = "Resource not found";
    statusCode = 404;
    code = ERROR_CODES.NOT_FOUND;
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    message = "Invalid token";
    statusCode = 401;
    code = ERROR_CODES.PERMISSION_ISSUE.UNAUTHORIZED_ACCESS;
  }

  if (err.name === "TokenExpiredError") {
    message = "Token expired";
    statusCode = 401;
    code = ERROR_CODES.PERMISSION_ISSUE.SESSION_EXPIRED;
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    message: message,
    code: code,
    ...(process.env.NODE_ENV === "development" && {
      error: err,
      stack: err.stack,
    }),
  });
};

/**
 * Handle 404 errors for undefined routes
 */
export const notFound = (req, res, next) => {
  const error = new AppError(
    `Not Found - ${req.originalUrl}`,
    true,
    ERROR_CODES.NOT_FOUND,
    404
  );
  next(error);
};
