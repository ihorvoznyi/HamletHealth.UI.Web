import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseQueryWithAuth } from '@shared/lib/api';

import { DiagnosisMapper } from '../helpers';

import { treatmentPlanActions } from '../models';
import { appActions } from '@app/store';

import { IServerResponse } from '@shared/lib/types';
import { CreateTreatmentPlanDto, IDashboardStats, IDiagnosisItemDto, IPatient } from './patient-api.interfaces';
import { PATIENT_API_ENDPOINTS } from './patient-api.constants';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: baseQueryWithAuth,
  keepUnusedDataFor: 120,
  endpoints: builder => ({
    getDiagnosis: builder.query<IDiagnosisItemDto[], void>({
      query: () => ({
        url: PATIENT_API_ENDPOINTS.diagnosis,
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
        url: PATIENT_API_ENDPOINTS.treatmentPlan,
        method: 'POST',
        body,
      }),
    }),
    getPatients: builder.query<IPatient[], void>({
      query: () => ({
        url: PATIENT_API_ENDPOINTS.patientsList,
      }),
      transformResponse: (response: IServerResponse<IPatient[]>) => response.Data, 
    }),
    getDashboardStats: builder.query<IDashboardStats, void>({
      query: () => ({
        url: PATIENT_API_ENDPOINTS.dashboardStats,
      }),
      transformResponse: (response: IServerResponse<IDashboardStats>) => response.Data,
    }),
  })
});

export const { 
  useGetPatientsQuery,
  useGetDiagnosisQuery,
  useGetDashboardStatsQuery,
  useCreateTreatmentPlanMutation,
} = patientApi;
