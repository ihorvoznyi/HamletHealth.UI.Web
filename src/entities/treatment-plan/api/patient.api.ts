import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseQueryWithAuth } from '@shared/lib/api';

import { DiagnosisMapper } from '../helpers';

import { treatmentPlanActions } from '../models';
import { appActions } from '@app/store';

import { ApiMethod, IServerResponse } from '@shared/lib/types';
import { AddPatientDto, CreateTreatmentPlanDto, FindPatientDto, IDiagnosisItemDto } from './patient-api.interfaces';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: baseQueryWithAuth,
  endpoints: builder => ({
    findPatient: builder.mutation<IServerResponse<unknown>, FindPatientDto>({
      query: body => ({
        url: '/users/search',
        method: ApiMethod.POST,
        body,
      }),
    }),
    addPatient: builder.mutation<string, AddPatientDto>({
      query: body => ({
        url: '/users/addPatient',
        method: ApiMethod.POST,
        body,
      }),
      transformResponse: (response: IServerResponse<{ invitedUserId: string }>) => response.Data.invitedUserId,
    }),
    getDiagnosis: builder.query<IDiagnosisItemDto[], void>({
      query: () => ({
        url: '/diagnosis',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          dispatch(appActions.setGlobalLoader(true));
          const { data }  = await queryFulfilled as unknown as { data: IServerResponse<IDiagnosisItemDto[]> };
          const diagnosis = data.Data;

          if (diagnosis) {
            const preparedDiagnosis = DiagnosisMapper.mapToDiagnosisStateModel(diagnosis);
            dispatch(treatmentPlanActions.setDiagnosis(preparedDiagnosis));
          }
        } catch {
          // dispatch(setError);
        } finally {
          dispatch(appActions.setGlobalLoader(false));
        }
      },
    }),
    createTreatmentPlan: builder.mutation<IServerResponse<unknown>, CreateTreatmentPlanDto>({
      query: body => ({
        url: '/treatmentPlan',
        method: 'POST',
        body,
      })
    }),
  })
});

export const { 
  useFindPatientMutation, 
  useAddPatientMutation, 
  useGetDiagnosisQuery, 
  useCreateTreatmentPlanMutation 
} = patientApi;
