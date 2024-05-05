export type ApiResponse<TData> = {
  Data:     TData;
  Messages: string[];
}

export enum ApiMethod {
  GET     = 'GET',
  POST    = 'POST',
  PUT     = 'PUT',
  PATCH   = 'PATCH',
  DELETE  = 'DELETE',
  OPTIONS = 'OPTIONS'
}

export class AppError extends Error {
  private readonly _status: number;

  constructor(message: string, status: number) {
    super(message);

    this._status = status;
  }

  get error() {
    return {
      status: this._status,
      message: this.message,
    };
  }
}