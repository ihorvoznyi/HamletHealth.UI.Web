import { FC, useState } from 'react';


import Diagnosis from './diagnosis';
import ActivitiesMedicine from './activities';
import TreatmentList from './treatment-plan-list';
import Button from '@components/ui/button';
import { ArrowLeftSvg } from '@components/ui/icons';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType {
  onProcess: () => void;
  onReturn: () => void;
}

const AddTreatmentStage: FC<PropsType> = ({ onReturn, onProcess }) => {
  const [isDefined, setIsDefined] = useState(false);
  
  return (
    <>
      <div>
        <h2 className="fs26SemiBold">Add treatment plan</h2>

        <div className={classes.sections}>
          <Diagnosis />
          <ActivitiesMedicine />
          <TreatmentList />
        </div>

        <Button styles={classes.defineBtn} onClick={() => setIsDefined(prev => !prev)}>
          Define all as a plan
        </Button>
      </div>

      <div className={classes.btnsContainer}>
        <Button type="outlined" onClick={onReturn}><ArrowLeftSvg /></Button>
        <Button 
          styles={{
            container: cn(
              classes.processBtn.base, 
              !isDefined && classes.processBtn.disabled
            ),
          }}
          disabled={!isDefined}
          onClick={onProcess}>PROCEED</Button>
      </div>
    </>
  );
};

export default AddTreatmentStage;
