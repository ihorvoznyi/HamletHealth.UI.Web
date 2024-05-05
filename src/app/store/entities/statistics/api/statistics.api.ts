import { createApi } from '@reduxjs/toolkit/query';
import { baseQueryWithAuth } from '@shared/lib/api';

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: baseQueryWithAuth,
  endpoints: builder => ({})
});