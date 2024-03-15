import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseQueryWithAuth } from '@shared/lib/api';

import { DiagnosisMapper } from '../helpers';

import { treatmentPlanActions } from '../models';
import { appActions } from '@app/store';

import { IServerResponse } from '@shared/lib/types';
import { CreateTreatmentPlanDto, IDiagnosisItemDto } from './patient-api.interfaces';
import { TREATMENT_PLAN_API_ENDPOINTS } from './patient-api.constants';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: baseQueryWithAuth,
  endpoints: builder => ({
    getDiagnosis: builder.query<IDiagnosisItemDto[], void>({
      query: () => ({
        url: TREATMENT_PLAN_API_ENDPOINTS.diagnosis,
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
        url: TREATMENT_PLAN_API_ENDPOINTS.treatmentPlan,
        method: 'POST',
        body,
      }),
    }),
  })
});

export const { 
  useGetDiagnosisQuery, 
  useCreateTreatmentPlanMutation,
} = patientApi;
