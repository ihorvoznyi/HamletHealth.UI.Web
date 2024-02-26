import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { Environment } from '@shared/lib/environment';

import { AuthHelper } from '../helpers';

const baseQuery = fetchBaseQuery({
  baseUrl: Environment.VITE_API_URL,
  prepareHeaders(headers) {
    const token = AuthHelper.retrieveToken();
    if (token) {
      headers.set('authorization', token);
    }
    return headers;
  },
});

export const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs, 
  unknown, 
  FetchBaseQueryError
> = async(args, api, extraOptions = {}) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch({ type: 'userSlice/logout' });
  }
  return result;
};
