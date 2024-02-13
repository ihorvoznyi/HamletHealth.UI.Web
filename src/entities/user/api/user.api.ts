import { API_CONFIG, ServerResponse } from '@shared/lib/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCredentials } from '../model';
import { CreateUserDto, LoginDto, UserDto } from './user-api.interfaces';
import { USER_API_ENDPOINTS } from './user-api.constants';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_CONFIG.baseUrl }),
  endpoints: build => ({
    login: build.mutation<ServerResponse<UserDto>, LoginDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.login,
        method: 'POST',
        body,
      }),
      onQueryStarted: async(_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          
          if (data) {
            dispatch(setCredentials(data.Data));
          }
        }
        catch (error) {
          //
        }
      }
    }),
    register: build.mutation<UserDto, CreateUserDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.register,
        method: 'POST',
        body,
      }),
      transformResponse: (response: ServerResponse<UserDto>) => response.Data,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
