import { FC, ReactElement } from 'react';

import AddPatientStage from './stages/add-patient-stage';
import AddTreatmentStage from './stages/add-treatment-stage';
import AddSupporterStage from './stages/add-supporter-stage';

import { StageType } from './index.interfaces';

interface PropsType {
  stage: StageType;
  onStage: (stage: StageType) => void;

  // TODO: provide form data as an arg
  onSave: () => void;
}

type StageMapper = {
  [key in StageType]: ReactElement;
}

const DisplayStage: FC<PropsType> = ({ stage, onStage, onSave }) => {
  const mapper: StageMapper = {
    'add-patient': <AddPatientStage onProcess={() => onStage('add-treatment')} />,
    'add-treatment': (
      <AddTreatmentStage 
        onReturn={() => onStage('add-patient')} 
        onProcess={() => onStage('add-supporter')} 
      />
    ),
    'add-supporter': <AddSupporterStage onSave={onSave} onReturn={() => onStage('add-treatment')} />,
  };

  return mapper[stage];
};

export default DisplayStage;