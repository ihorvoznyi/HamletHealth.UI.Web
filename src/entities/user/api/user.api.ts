import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Environment } from '@shared/lib/environment';

import { setCredentials } from '../model';

import { USER_API_ENDPOINTS } from './user-api.constants';

import { IServerResponse } from '@shared/lib/api';
import { CreateUserDto, LoginDto, UserDto } from './user-api.interfaces';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: Environment.VITE_API_URL }),
  endpoints: build => ({
    login: build.mutation<IServerResponse<UserDto>, LoginDto>({
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
      transformResponse: (response: IServerResponse<UserDto>) => response.Data,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
