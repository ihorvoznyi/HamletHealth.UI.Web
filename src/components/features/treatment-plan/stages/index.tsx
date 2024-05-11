import { ReactElement } from 'react';

import PatientStage from './add-patient-stage';
import TreatmentStage from './add-treatment-stage';

import { StageType, selectCurrentStageType } from '@app/store/entities/treatment';

import { RecordOf } from '@shared/lib/types';
import { useAppSelector } from '@shared/model';

const DisplayStage = () => {
  const stage = useAppSelector(selectCurrentStageType);
  const mapper: RecordOf<StageType, ReactElement> = {
    'addPatient': <PatientStage />,
    'treatmentPlan': <TreatmentStage />,
  };

  return mapper[stage];
};

export default DisplayStage;