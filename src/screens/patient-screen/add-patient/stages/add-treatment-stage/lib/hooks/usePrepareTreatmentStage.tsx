import { useEffect, useState } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from '@shared/model';

import { IDiagnosisStateType } from '@entities/treatment-plan/models/types';
import { IDiagnosisItemDto, treatmentPlanSlice, useGetDiagnosisQuery } from '@entities/treatment-plan';

const mapToDiagnosis = (diagnosis: IDiagnosisItemDto[]): IDiagnosisStateType[] => {
  return diagnosis.map(({ id, name, code, recommendedActivities }) => ({
    id,
    name,
    code,
    recommendedActivities: recommendedActivities.map(activity => ({
      id: activity.id,
      icon: activity.icon,
      name: activity.name,
      category: activity.category,
    })),
  }));
};

const usePrepareTreatmentStage = () => {
  const dispatch = useAppDispatch();
  const { setDiagnosis } = bindActionCreators(treatmentPlanSlice.actions, dispatch);
 
  const [error, setError] = useState<string | null>(null);
  const { data: diagnosisResponse, isLoading, isError  } = useGetDiagnosisQuery();

  useEffect(() => {
    try {
      if (diagnosisResponse) {
        const diagnosis = mapToDiagnosis(diagnosisResponse);
        const list = diagnosis.map(item => ({
          id: item.id,
          name: item.name
        }));
        setDiagnosis(diagnosis);
      }
    } catch(error) {  
      setError('Failed to prepare diagnosis data');
    }
  }, [diagnosisResponse]);

  return { 
    error,
    isError,
    isLoading,
  };
};

export default usePrepareTreatmentStage;