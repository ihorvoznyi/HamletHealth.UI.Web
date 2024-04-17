import { RootState } from '@shared/model';
import { ActivitiesFilterType, TreatmentPlanDataType } from './types';
import { includesCaseInsensitive, toNormalCase } from '@utils/text.util';

export const selectCurrentStage = (state: RootState) => {
	const currentStageType = state.treatmentPlanReducer.currentStage;
	return state.treatmentPlanReducer.stages[currentStageType];
};
export const selectCurrentStageType = ({ treatmentPlanReducer }: RootState) =>
	treatmentPlanReducer.currentStage;

export const selectAddPatientStageData = ({ treatmentPlanReducer }: RootState) =>
	treatmentPlanReducer.stages.addPatient.data;

export const selectNormalizedPatientFullname = ({ treatmentPlanReducer }: RootState) => {
	const { firstName, lastName } = treatmentPlanReducer.stages.addPatient.data;

	return `${toNormalCase(firstName)} ${toNormalCase(lastName)}`;
};

export const selectTreatmentPlanStageData = ({ treatmentPlanReducer }: RootState) =>
	treatmentPlanReducer.stages.treatmentPlan.data;

export const selectPatientStageStatus = ({ treatmentPlanReducer }: RootState) =>
	treatmentPlanReducer.stages.addPatient.status;

export const selectTreatmentStageStatus = ({ treatmentPlanReducer }: RootState) =>
	treatmentPlanReducer.stages.treatmentPlan.status;

export const selectStageStatusesAndCurrentStage = ({ treatmentPlanReducer }: RootState) => ({
	currentStage: treatmentPlanReducer.currentStage,
	patientStageStatus: treatmentPlanReducer.stages.addPatient.status,
	treatmentStageStatus: treatmentPlanReducer.stages.treatmentPlan.status,
});

export const selectAddedPatientId = ({ treatmentPlanReducer }: RootState) => {
	const { patientId } = treatmentPlanReducer.stages.treatmentPlan.data;

	return patientId;
};

export const selectDiagnosisRecommendations = (id: string, { treatmentPlanReducer }: RootState) => {
	const diagnosis = treatmentPlanReducer.preparedData.diagnosis.find(item => item.id === id);
	return diagnosis?.recommendedActivities;
};

export const selectAddPatientStateData = ({ treatmentPlanReducer }: RootState) => {
	return treatmentPlanReducer.stages.addPatient;
};

export const selectTreatmentPlanStage = ({ treatmentPlanReducer }: RootState) => {
	const { status, data } = treatmentPlanReducer.stages.treatmentPlan;
	const { diagnosis, activeDiagnosis } = treatmentPlanReducer.preparedData;

	return {
		stageStatus: status,
		diagnosis: diagnosis,
		selectedDiagnosis: activeDiagnosis,
		selectedActivities: data.selectedTreatments,
	};
};

type ActivitiesFilterOptions = {
	searchTerm: string;
	filterBy: ActivitiesFilterType;
};

export const selectActivities = (
	{ treatmentPlanReducer }: RootState,
	options?: Partial<ActivitiesFilterOptions>
) => {
	const recommendedActivities =
		treatmentPlanReducer.preparedData.activeDiagnosis?.recommendedActivities ?? [];

	if (!options || options.filterBy === 'all') {
		return recommendedActivities.filter(item =>
			includesCaseInsensitive(item.name, options?.searchTerm)
		);
	}

	const category = options?.filterBy === 'activity' ? 0 : 1;
	return recommendedActivities.filter(
		item => includesCaseInsensitive(item.name, options?.searchTerm) && item.category === category
	);
};

export const selectDiagnosis = (state: RootState, options?: { searchTerm: string }) => {
	const { diagnosis } = state.treatmentPlanReducer.preparedData;

	return diagnosis.filter(diagnos => includesCaseInsensitive(diagnos.name, options?.searchTerm));
};

export const selectSelectedActivities = ({ treatmentPlanReducer }: RootState) => {
	return treatmentPlanReducer.stages.treatmentPlan.data.selectedTreatments;
};

export const selectTreatmentPlanData = ({
	treatmentPlanReducer,
}: RootState): TreatmentPlanDataType => {
	const { data: treatmentPlanStageData } = treatmentPlanReducer.stages.treatmentPlan;
	const { diagnosis: diagnosisList } = treatmentPlanReducer.preparedData;

	return {
		name: treatmentPlanStageData.name,
		description: treatmentPlanStageData.description,
		patientId: treatmentPlanStageData.patientId,
		treatmentPlanItems: treatmentPlanStageData.selectedTreatments.map(item => {
			const activityDiagnosis = diagnosisList.find(d => d.id === item.diagnosId);
			return {
				diagnosis: activityDiagnosis!,
				treatment: item.treatment,
			};
		}),
	};
};

export const selectActiveDiagnosId = ({ treatmentPlanReducer }: RootState) =>
	treatmentPlanReducer.preparedData.activeDiagnosis?.id;
