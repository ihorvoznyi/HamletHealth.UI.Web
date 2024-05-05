interface ApiError extends Error {
  status?: number
}

export function isErrorWithStatus(error: unknown): error is ApiError {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function isUnauthorizedError(error: unknown) {
  return isErrorWithStatus(error) && error.status === 401;
}