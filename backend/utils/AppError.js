const DEFAULT_SUCCESS_CODE = 1000;

export const ERROR_CODES = {
  DEFAULT_ERROR_CODE: 1305,
  MONGO_ERROR_CODES: {
    UNIQUE_CONSTRAINT: 11000,
  },
  DATA_VALIDATION: {
    MISSING_DATA: 601,
    INVALID_DATA_TYPE: 602,
  },
  PERMISSION_ISSUE: {
    UNAUTHORIZED_ACCESS: 401,
    SESSION_EXPIRED: 402,
    MISSING_SYSTEM_PERMISSIONS: 403,
    FORBIDDEN: 403,
  },
  LIMIT_EXCEEDS: {
    SIZE_LIMIT: 701,
    TIME_LIMIT: 702,
  },
  NOT_FOUND: 404,
};

/**
 * Custom Application Error class
 * @extends Error
 */
export class AppError extends Error {
  constructor(
    message,
    isOperational = true,
    code = ERROR_CODES.DEFAULT_ERROR_CODE,
    statusCode = 500
  ) {
    super(message);
    this.message = message;
    this.isOperational = isOperational;
    this.code = code;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export { DEFAULT_SUCCESS_CODE };
