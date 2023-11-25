import { useState } from 'react';

import StageBar from './stage-bar';
import DisplayStage from './DisplayStage';

import { classes } from './index.tailwind';
import { StageType } from './index.interfaces';

const AddPatient = () => {
  const [stage, setStage] = useState<StageType>('add-patient');

  return (
    <div className={classes.container}>
      <StageBar />
      <DisplayStage stage={stage} onStage={setStage} />
    </div>
  );
};

export default AddPatient;
