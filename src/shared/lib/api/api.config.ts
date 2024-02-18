import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Environment } from '@shared/lib/environment';

export const api = createApi({
  reducerPath: 'hamlettApi',
  // TODO: implement in baseQuery token based requests
  baseQuery: fetchBaseQuery({ baseUrl: Environment.VITE_API_URL }),
  endpoints: () => ({}),
});
