export interface IServerResponse<TData> {
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