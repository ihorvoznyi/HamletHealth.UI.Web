import { redirect } from 'react-router-dom';

import StageBar from './stage-bar';
import DisplayStage from './DisplayStage';

import { useGetDiagnosisQuery } from '@entities/treatment-plan';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const AddPatient = () => {
  const { isError } = useGetDiagnosisQuery();

  if (isError) {
    redirect(APP_ROUTES.DASHBOARD);
  }

  return (
    <div className={classes.container}>
      <StageBar />
      <DisplayStage />
    </div>
  );
};

export default AddPatient;
