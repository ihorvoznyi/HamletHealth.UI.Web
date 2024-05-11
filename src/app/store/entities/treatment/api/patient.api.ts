import { DiagnosisMapper } from '../helpers';

import { treatmentPlanActions } from '../models';
import { api, appActions } from '@app/store';

import { Gender } from '@shared/lib/enums';

import { ApiMethod, ApiResponse, KeyHealthIndicatorRate } from '@shared/lib/types';
import {
	IPatient,
	IDashboardStats,
	IDiagnosisItemDto,
	CreateTreatmentPlanDto,
} from './patient-api.interfaces';
import { PATIENT_API_ENDPOINTS } from './patient-api.constants';

const injectedPatientApi = api.injectEndpoints({
	endpoints: builder => ({
		getDiagnosis: builder.query<IDiagnosisItemDto[], void>({
			query: () => ({ url: PATIENT_API_ENDPOINTS.diagnosis }),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					dispatch(appActions.setGlobalLoader(true));
					const { data } = (await queryFulfilled) as unknown as {
						data: ApiResponse<IDiagnosisItemDto[]>;
					};
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
		createTreatmentPlan: builder.mutation<ApiResponse<unknown>, CreateTreatmentPlanDto>({
			query: body => ({
				url: PATIENT_API_ENDPOINTS.treatmentPlan,
				method: ApiMethod.POST,
				body,
			}),
		}),
		getActivities: builder.query<GetActivitiesResponse, GetActivitiesArg>({
			query: () => ({ url: PATIENT_API_ENDPOINTS.activities }),
			transformResponse: (response: ApiResponse<GetActivitiesResponse>) => response.Data,
		}),
		getPatients: builder.query<IPatient[], void>({
			query: () => ({ url: PATIENT_API_ENDPOINTS.patientsList }),
			transformResponse: (response: ApiResponse<IPatient[]>) => response.Data,
		}),
		getDashboardStats: builder.query<IDashboardStats, void>({
			query: () => ({ url: PATIENT_API_ENDPOINTS.dashboardStats }),
			transformResponse: (response: ApiResponse<IDashboardStats>) => response.Data,
		}),
		getPatientsPlans: builder.query<GetPatientsPlansResponse, GetPatientsPlansArg>({
			query: () => ({ url: PATIENT_API_ENDPOINTS.patientsPlans }),
			transformResponse: (response: ApiResponse<GetPatientsPlansResponse>) => response.Data,
		}),
	}),
});

export const {
	useGetActivitiesQuery,
	useGetPatientsQuery,
	useGetDiagnosisQuery,
	useGetPatientsPlansQuery,
	useGetDashboardStatsQuery,
	useCreateTreatmentPlanMutation,
} = injectedPatientApi;

// API Responses & Request Args
export type GetPatientsPlansArg = void;
export type GetPatientsPlansResponse = PatientPlanDto[];

export type GetActivitiesArg = void;
export type GetActivitiesResponse = ActivityDto[]

// API DTOs
export type PatientPlanDto = {
	userDto: UserDto;
	entries: JournalEntryDto[];
	plan: TreatmentPlanDto;
}

export type UserDto = {
	id: string;
	diagnos: string;
	birthDate: string;
	userName?: string;
	firstName: string;
	lastName: string;
	email?: string;
	phone?: string;
	bio: string;
	speciality?: string;
	gender: Gender;
};

export type TreatmentPlanDto = {
	id: string;
	name: string;
	description: string;
	treatmentPlanItems: TreatmentPlanItemDto[];
	entries: JournalEntryDto[];
};

export type TreatmentPlanItemDto = {
	diagnos: DiagnosDto;
	startDate: string;
	endDate: string;
	activities: ActivityDto[];
	medications: MedicationDto[];
};

export type DiagnosDto = {
	id: string;
	name: string;
	code: string;
	createdDate: string;
};

export type MedicationDto = {
	id: string;
	name: string;
	code: string;
	dosage: string;
	comment: string;
	startDate: string;
	endDate: string;
};

export type ActivityDto = {
	id: string;
	name: string;
	icon: string;
	tags: string[];
	category: number;
};

export type JournalEntryDto = {
	id: string;
	treatmentPlanId: string;
	date: string;
	note: string;
	image: string;
	activityIds: string[];
	keyHealthIndicatorRates: KeyHealthIndicatorRateDto[];
};

export type KeyHealthIndicatorRateDto = {
	id: string;
	rate: KeyHealthIndicatorRate;
	keyHealthIndicator: KeyHealthIndicatorDto;
	supportResponse: object;
};

export type KeyHealthIndicatorDto = {
	id: string;
	name: string;
};
