import { useState } from 'react';

import StageBar from './stage-bar';
import DisplayStage from './DisplayStage';

import { classes } from './index.tailwind';
import { StageType } from './index.interfaces';
import SuccessNotify from './success-notify';

const AddPatient = () => {
  const [stage, setStage] = useState<StageType>('add-patient');
  const [showSuccessNotify, setShowSuccessNotify] = useState(true);

  return (
    <div className={classes.container}>
      {showSuccessNotify ? <SuccessNotify /> : (
        <>
          <StageBar />
          <DisplayStage stage={stage} onStage={setStage} />
        </>
      )}
    </div>
  );
};

export default AddPatient;
