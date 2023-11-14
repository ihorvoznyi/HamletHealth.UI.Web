import { FC, ReactElement } from "react";

import AddPatientStage from "./add-patient-stage";
import AddTreatmentStage from "./add-treatment-stage";

import { StageType } from "./index.interfaces";
import AddSupporterStage from "./add-supporter-stage";

interface PropsType {
  stage: StageType;
  onStage: (stage: StageType) => void;
}

type StageMapper = {
  [key in StageType]: ReactElement;
}

const DisplayStage: FC<PropsType> = ({ stage, onStage }) => {
  const mapper: StageMapper = {
    'add-patient': <AddPatientStage onProcess={() => onStage('add-treatment')} />,
    'add-treatment': (
      <AddTreatmentStage 
        onReturn={() => onStage('add-patient')} 
        onProcess={() => onStage('add-supporter')} 
      />
    ),
    'add-supporter': <AddSupporterStage onReturn={() => onStage('add-treatment')} />,
  };

  return mapper[stage];
}

export default DisplayStage;