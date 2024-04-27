import { useEffect } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { AddPatientForm } from '@components/features/forms';

import { useAppDispatch, useAppSelector } from '@shared/model';

import { treatmentPlanSlice, selectPatientStageStatus } from '@entities/patient';

import { classes } from './index.tailwind';

const AddPatientStage = () => {
  const dispatch = useAppDispatch();
  const stageStatus = useAppSelector(selectPatientStageStatus);
  const { setStageStatus } = bindActionCreators(treatmentPlanSlice.actions, dispatch);

  useEffect(() => {
    if (stageStatus !== 'filled') {
      setStageStatus('checked');
    }
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add patient</h2>
      <p className={classes.subtitle}>Fill in the info to create an account for the patient.</p>

      <AddPatientForm />
    </div>
  );
};

export default AddPatientStage;
