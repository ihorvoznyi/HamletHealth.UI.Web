import { shallowEqual } from 'react-redux';
import { useEffect } from 'react';

import TreatmentPlan from './sections';
import DefinePlanModal from './modal';
import TreatmentPlanStageNavigation from './navigation';

import { useAppDispatch, useAppSelector } from '@shared/model';

import { TreatmentPlanStageContextProvider } from './lib/context';
import { selectTreatmentPlanStage, treatmentPlanActions } from '@entities/treatment-plan';

const AddTreatmentStage = () => {
  const dispatch = useAppDispatch();
  const { stageStatus } = useAppSelector(selectTreatmentPlanStage, shallowEqual);

  useEffect(() => {
    if (stageStatus !== 'filled') {
      dispatch(treatmentPlanActions.setStageStatus('checked'));
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
