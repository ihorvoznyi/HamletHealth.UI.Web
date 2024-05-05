import { onAuthQueryStartedHandler } from '../helpers';

import { USER_API_ENDPOINTS } from './user-api.constants';

import { ApiMethod, ApiResponse } from '@shared/lib/types';
import {
	CreateDoctorDto,
	CreatePatientDto,
	LoginDto,
	FindPatientDto,
	UserDto,
} from './user-api.interfaces';
import { api } from '@app/store/app';

const injectedUserApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<ApiResponse<UserDto>, LoginDto>({
			query: body => ({
				url: USER_API_ENDPOINTS.login,
				method: ApiMethod.POST,
				body,
			}),
			onQueryStarted: async (_, { queryFulfilled, dispatch }) =>
				await onAuthQueryStartedHandler(queryFulfilled, dispatch),
		}),
		createDoctor: builder.mutation<ApiResponse<UserDto>, CreateDoctorDto>({
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
			transformResponse: (response: ApiResponse<{ id: string }>) => response.Data.id,
		}),
		findPatient: builder.mutation<string, FindPatientDto>({
			query: body => ({
				url: USER_API_ENDPOINTS.findPatient,
				method: ApiMethod.POST,
				body,
			}),
			transformResponse: (response: ApiResponse<{ id: string }>) => response.Data.id,
		}),
		addPatient: builder.mutation<string, { id: string; role: 0 }>({
			query: body => ({
				url: USER_API_ENDPOINTS.addPatient,
				method: ApiMethod.POST,
				body,
			}),
			transformResponse: (response: ApiResponse<{ invitedUserId: string }>) => response.Data.invitedUserId,
		}),
	}),
});

export const {
	useLoginMutation,
	useCreateDoctorMutation,
	useCreatePatientMutation,
	useFindPatientMutation,
	useAddPatientMutation,
} = injectedUserApi;
