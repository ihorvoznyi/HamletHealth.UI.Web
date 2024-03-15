import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithAuth } from '@shared/lib/api';

import { onAuthQueryStartedHandler } from '../helpers';

import { USER_API_ENDPOINTS } from './user-api.constants';

import { ApiMethod, AppError, IServerResponse } from '@shared/lib/types';
import { 
  AddPatientDto, 
  CreateDoctorDto, 
  CreatePatientDto, 
  LoginDto, 
  FindPatientDto, 
  UserDto 
} from './user-api.interfaces';
import { Logger } from '@shared/lib/helpers';
import { json } from 'express';
import { treatmentPlanActions } from '@entities/treatment-plan';

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
      onQueryStarted: async(_, { queryFulfilled, dispatch }) => 
        await onAuthQueryStartedHandler(queryFulfilled, dispatch),
    }),
    createDoctor: builder.mutation<IServerResponse<UserDto>, CreateDoctorDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.createUser,
        method: ApiMethod.POST,
        body,
      }),
      onQueryStarted: async(_, { queryFulfilled, dispatch }) =>
        await onAuthQueryStartedHandler(queryFulfilled, dispatch),
    }),
    createPatient: builder.mutation<string, CreatePatientDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.createUser,
        method: ApiMethod.POST,
        body,
      }),
      transformResponse: (response: IServerResponse<{ id: string; }>) => response.Data.id,
    }),
    findPatient: builder.mutation<string, FindPatientDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.findPatient,
        method: ApiMethod.POST,
        body,
      }),
      transformResponse: (response: IServerResponse<{ id: string; }>) => response.Data.id,
    }),
    addPatient: builder.mutation<string, AddPatientDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.addPatient,
        method: ApiMethod.POST,
        body,
      }),
      transformResponse: (response: IServerResponse<{ invitedUserId: string }>) => response.Data.invitedUserId,
    }),
    findAndAddPatient: builder.mutation<IServerResponse<{ id: string; }>, FindPatientDto>({
      query: body => ({
        url: USER_API_ENDPOINTS.findPatient,
        method: ApiMethod.POST,
        body,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const existingPatientId = data.Data?.id;

          if (existingPatientId) {
            const { data: invitationId } = await dispatch(userApi.endpoints.addPatient.initiate({ 
              id: existingPatientId 
            })) as unknown as { data: string; };

            dispatch(treatmentPlanActions.setInvitedPatientId(invitationId));
          } else {
            const { data: invitationId } = await dispatch(userApi.endpoints.createPatient.initiate({
              role: 0,
              email: arg.phoneOrEmail.includes('@') ? arg.phoneOrEmail : undefined,
              phone: !arg.phoneOrEmail.includes('@') ? arg.phoneOrEmail : undefined,
              firstName: arg.firstName,
              lastName: arg.lastName,
              password: 'patient'
            })) as unknown as { data: string; };

            dispatch(treatmentPlanActions.setInvitedPatientId(invitationId));
          }
        } catch(err) {
          const appError = err as AppError;
          Logger.error('Failed to find or add a patient.', appError.error.data.Messages.shift());
        }
      }
    })
  }),
});

export const { 
  useLoginMutation, 
  useCreateDoctorMutation, 
  useCreatePatientMutation,
  useFindPatientMutation,
  useAddPatientMutation,
  useFindAndAddPatientMutation
} = userApi;
