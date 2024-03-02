import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseQueryWithAuth } from '@shared/lib/api';

import { ApiMethod, IServerResponse } from '@shared/lib/types';
import { AddPatientDto, FindPatientDto, IDiagnosisItem } from './patient-api.interfaces';

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
    addPatient: builder.mutation<IServerResponse<unknown>, AddPatientDto>({
      query: body => ({
        url: '/users/addPatient',
        method: ApiMethod.POST,
        body,
      })
    }),
    getDiagnosis: builder.query<IServerResponse<IDiagnosisItem[]>, void>({
      query: () => ({
        url: '/diagnosis',
      })
    })
  })
});

export const { useFindPatientMutation, useAddPatientMutation, useGetDiagnosisQuery } = patientApi;
