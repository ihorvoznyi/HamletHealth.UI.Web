import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithAuth } from '@shared/lib/api';

import { onAuthQueryStartedHandler } from '../helpers';

import { USER_API_ENDPOINTS } from './user-api.constants';

import { ApiMethod, IServerResponse } from '@shared/lib/types';
import {
	CreateDoctorDto,
	CreatePatientDto,
	LoginDto,
	FindPatientDto,
	UserDto,
} from './user-api.interfaces';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: baseQueryWithAuth,
	endpoints: builder => ({
		login: builder.mutation<IServerResponse<UserDto>, LoginDto>({
			query: body => ({
				url: USER_API_ENDPOINTS.login,
				method: ApiMethod.POST,
				body,
			}),
			onQueryStarted: async (_, { queryFulfilled, dispatch }) =>
				await onAuthQueryStartedHandler(queryFulfilled, dispatch),
		}),
		createDoctor: builder.mutation<IServerResponse<UserDto>, CreateDoctorDto>({
			query: body => ({
				url: USER_API_ENDPOINTS.createUser,
				method: ApiMethod.POST,
				body,
			}),
			onQueryStarted: async (_, { queryFulfilled, dispatch }) =>
				await onAuthQueryStartedHandler(queryFulfilled, dispatch),
		}),
		createPatient: builder.mutation<string, CreatePatientDto>({
			query: body => ({
				url: USER_API_ENDPOINTS.createUser,
				method: ApiMethod.POST,
				body,
			}),
			transformResponse: (response: IServerResponse<{ id: string }>) => response.Data.id,
		}),
		findPatient: builder.mutation<string, FindPatientDto>({
			query: body => ({
				url: USER_API_ENDPOINTS.findPatient,
				method: ApiMethod.POST,
				body,
			}),
			transformResponse: (response: IServerResponse<{ id: string }>) => response.Data.id,
		}),
		addPatient: builder.mutation<string, { id: string; }>({
			query: body => ({
				url: USER_API_ENDPOINTS.addPatient,
				method: ApiMethod.POST,
				body,
			}),
			transformResponse: (response: IServerResponse<{ invitedUserId: string }>) => response.Data.invitedUserId,
		}),
	}),
});

export const {
	useLoginMutation,
	useCreateDoctorMutation,
	useCreatePatientMutation,
	useFindPatientMutation,
	useAddPatientMutation,
} = userApi;
