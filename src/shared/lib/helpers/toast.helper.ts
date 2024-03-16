import { toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';

export class ToastHelper {
  private static readonly defaultOptions: ToastOptions = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    style: {
      width: 400,
    },
  };

  public static error(message: string, options?: ToastOptions) {
    toast.error(message, this.configureOptions(options));
  }

  public static info(message: string, options?: ToastOptions) {
    toast.info(message, this.configureOptions(options));
  }

  private static configureOptions(customOptions?: ToastOptions): ToastOptions {
    return { ...this.defaultOptions, ...customOptions };
  }
}