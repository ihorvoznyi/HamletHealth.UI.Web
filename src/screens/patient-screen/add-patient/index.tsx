import { useState } from 'react';

import StageBar from './stage-bar';
import DisplayStage from './DisplayStage';
import SuccessNotify from './success-notify';

import { useActions } from '@hooks/useActions';

import { resetStages } from './stage-bar/lib';

import { StageType } from './index.interfaces';

import { classes } from './index.tailwind';

const AddPatient = () => {
  const [boundResetStages] = useActions([resetStages]);
  const [stage, setStage] = useState<StageType>('add-patient');
  const [showSuccessNotify, setShowSuccessNotify] = useState(false);

  const handleAdd = () => {
    // TODO: implement adding logic

    setShowSuccessNotify(true);
    boundResetStages();
  };

  return (
    <div className={classes.container}>
      {showSuccessNotify ? <SuccessNotify /> : (
        <>
          <StageBar />
          <DisplayStage onSave={handleAdd} stage={stage} onStage={setStage} />
        </>
      )}
    </div>
  );
};

export default AddPatient;
