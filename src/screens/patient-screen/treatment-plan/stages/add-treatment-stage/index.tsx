import { shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import TreatmentPlan from './sections';
import DefinePlanModal from './modal';
import TreatmentPlanStageNavigation from './navigation';

import { useAppDispatch, useAppSelector } from '@shared/model';

import { TreatmentPlanStageContextProvider } from './lib/context';
import { treatmentPlanSlice, selectTreatmentPlanStage } from '@entities/treatment-plan';

const AddTreatmentStage = () => {
  const dispatch = useAppDispatch();
  const { stageStatus } = useAppSelector(selectTreatmentPlanStage, shallowEqual);
  const { setStageStatus } = bindActionCreators(treatmentPlanSlice.actions, dispatch);

  useEffect(() => {
    if (stageStatus !== 'filled') {
      setStageStatus('checked');
    }
  }, []);

  return (
    <TreatmentPlanStageContextProvider>
      <TreatmentPlan />
      <TreatmentPlanStageNavigation />
      <DefinePlanModal />
    </TreatmentPlanStageContextProvider>
  );
};

export default AddTreatmentStage;
