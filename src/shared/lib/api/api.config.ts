import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { RootState } from '@app/store';
import { Environment } from '../environment';

const baseQuery = fetchBaseQuery({
  baseUrl: Environment.VITE_API_URL,
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).userReducer.accessToken;
    if (token) {
      headers.set('Authorization', token);
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
    api.dispatch({ type: 'appSlice/setGlobalLoader', payload: false });
  }
  return result;
};
