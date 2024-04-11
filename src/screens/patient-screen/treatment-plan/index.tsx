import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import StageBar from './stage-bar';
import DisplayStage from './DisplayStage';
import SuccessNotify from './success-notify';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { selectTreatmentPlanStage, treatmentPlanActions, useGetDiagnosisQuery } from '@entities/patient';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const CreateTreatmentPlan = () => {
  const dispatch = useAppDispatch();
  const { isError } = useGetDiagnosisQuery();
  const { stageStatus } = useAppSelector(selectTreatmentPlanStage, shallowEqual);

  if (isError) {
    redirect(APP_ROUTES.DASHBOARD);
  }

  const clearTreatmentPlanState = () => () => {
    dispatch(treatmentPlanActions.resetStages());
  };

  useEffect(clearTreatmentPlanState, []);

  return (
    <div className={classes.container}>
      <StageBar />
      {stageStatus !== 'filled' ? <DisplayStage /> : <SuccessNotify />}
    </div>
  );
};

export default CreateTreatmentPlan;
