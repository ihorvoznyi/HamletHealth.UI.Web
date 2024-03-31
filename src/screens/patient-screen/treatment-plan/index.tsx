import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

import StageBar from './stage-bar';
import DisplayStage from './DisplayStage';

import { useAppDispatch } from '@shared/model';
import { treatmentPlanActions, useGetDiagnosisQuery } from '@entities/treatment-plan';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const CreateTreatmentPlan = () => {
  const dispatch = useAppDispatch();
  const { isError } = useGetDiagnosisQuery();

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
      <DisplayStage />
    </div>
  );
};

export default CreateTreatmentPlan;
