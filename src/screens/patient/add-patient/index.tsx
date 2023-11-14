import { useState } from 'react';
import { StageType } from './index.interfaces';
import DisplayStage from './DisplayStage';
import { classes } from './index.tailwind';
import StageBar from './stage-bar';

const AddPatient = () => {
  const [stage, setStage] = useState<StageType>('add-patient');

  return (
    <div className={classes.container}>
      <StageBar stages={['default', 'default', 'default']} />
      <DisplayStage stage={stage} onStage={setStage} />
    </div>
  );
};

export default AddPatient;
