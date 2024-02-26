import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithAuth } from '@shared/lib/api';

import { onAuthQueryStartedHandler } from '../helpers';

import { USER_API_ENDPOINTS } from './user-api.constants';

import { IServerResponse } from '@shared/lib/types';
import { CreateUserDto, LoginDto, UserDto } from './user-api.interfaces';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithAuth,
  endpoints: build => ({
    login: build.mutation<IServerResponse<UserDto>, LoginDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.login,
        method: 'POST',
        body,
      }),
      onQueryStarted: async(_, { queryFulfilled, dispatch }) => 
        await onAuthQueryStartedHandler(queryFulfilled, dispatch),
    }),
    register: build.mutation<IServerResponse<UserDto>, CreateUserDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.register,
        method: 'POST',
        body,
      }),
      onQueryStarted: async(_, { queryFulfilled, dispatch }) =>
        await onAuthQueryStartedHandler(queryFulfilled, dispatch),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
