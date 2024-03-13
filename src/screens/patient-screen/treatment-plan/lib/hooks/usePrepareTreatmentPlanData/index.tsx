import { useGetDiagnosisQuery } from '@entities/treatment-plan';

export const usePrepareTreatmentPlanData = () => {
  const { isLoading: isDiagnosisLoading, isError: isDiagnosisError } = useGetDiagnosisQuery();  
  return { isPreparing: isDiagnosisLoading, error: isDiagnosisError };
};
