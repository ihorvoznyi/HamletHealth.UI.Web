import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import { StageBar, PlanCreationStage, SuccessNotify } from '@components/features/treatment-plan';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { selectTreatmentPlanStage, treatmentPlanActions, useGetDiagnosisQuery } from '@app/store/entities/treatment';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';
import { isUnauthorizedError } from '@utils/http.util';

const CreateTreatmentPlanPage = () => {
  const dispatch = useAppDispatch();
  const { isError, error } = useGetDiagnosisQuery();
  const { stageStatus } = useAppSelector(selectTreatmentPlanStage, shallowEqual);

  if (isError && !isUnauthorizedError(error)) {
    redirect(APP_ROUTES.DASHBOARD);
  }

  const clearTreatmentPlanState = () => () => {
    dispatch(treatmentPlanActions.resetStages());
  };

  useEffect(clearTreatmentPlanState, []);

  return (
    <div className={classes.container}>
      <StageBar />
      {stageStatus !== 'filled' ? <PlanCreationStage /> : <SuccessNotify />}
    </div>
  );
};

export default CreateTreatmentPlanPage;
