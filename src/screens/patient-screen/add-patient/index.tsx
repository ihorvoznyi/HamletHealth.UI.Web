import { useState } from 'react';

import StageBar from './stage-bar';
import DisplayStage from './DisplayStage';
import SuccessNotify from './success-notify';

import { StageType } from './index.interfaces';

import { resetStages } from './stage-bar/lib';
import { useAppDispatch } from '@shared/model';

import { classes } from './index.tailwind';

const AddPatient = () => {
  const dispatch = useAppDispatch();
  const [stage, setStage] = useState<StageType>('add-patient');
  const [showSuccessNotify, setShowSuccessNotify] = useState(false);

  const handleAdd = () => {
    // TODO: implement adding logic

    setShowSuccessNotify(true);
    dispatch(resetStages());
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
