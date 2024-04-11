import { ReactElement } from 'react';

import AddPatientStage from './stages/add-patient-stage';
import AddTreatmentStage from './stages/add-treatment-stage';

import { StageType, selectCurrentStageType } from '@entities/patient';

import { RecordOf } from '@shared/lib/types';
import { useAppSelector } from '@shared/model';

const DisplayStage = () => {
  const stage = useAppSelector(selectCurrentStageType);
  const mapper: RecordOf<StageType, ReactElement> = {
    'addPatient': <AddPatientStage />,
    'treatmentPlan': <AddTreatmentStage />,
  };

  return mapper[stage];
};

export default DisplayStage;