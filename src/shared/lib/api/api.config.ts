export const API_CONFIG = {
  baseUrl: 'https://hamlet-health-api-dev.azurewebsites.net/api'
};

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
  reducerPath: 'hamlettApi',
  // TODO: implement in baseQuery token based requests
  baseQuery: fetchBaseQuery({ baseUrl: API_CONFIG.baseUrl }),
  endpoints: () => ({}),
});
