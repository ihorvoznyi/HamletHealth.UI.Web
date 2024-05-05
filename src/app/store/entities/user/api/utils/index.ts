import { toast } from 'react-toastify';

import { AppError } from '@shared/lib/types';

export function handleError(err: unknown, message?: string): void {
  if (err instanceof AppError) {
    toast.error(message ?? err.message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });
    console.error(`Operational error: ${err.message}`);
    throw err;
  } else {
    toast.error('An unexpected error occurred. Please try again later.', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });
    throw new Error('An unexpected error occurred while processing the request.');
  }
}