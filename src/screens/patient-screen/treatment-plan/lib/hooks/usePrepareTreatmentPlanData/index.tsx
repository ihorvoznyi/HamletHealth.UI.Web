import { useGetDiagnosisQuery } from '@entities/patient';

export const usePrepareTreatmentPlanData = () => {
  const { isLoading: isDiagnosisLoading, isError: isDiagnosisError } = useGetDiagnosisQuery();  
  return { isPreparing: isDiagnosisLoading, error: isDiagnosisError };
};
