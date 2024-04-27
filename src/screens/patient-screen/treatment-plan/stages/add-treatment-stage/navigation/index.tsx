import { Button } from '@components/ui/controls';
import { ArrowLeftSvg } from '@components/ui/svg';

import { useAppDispatch } from '@shared/model';
import { useTreatmentPlanStageContext } from '../lib/context';

import { treatmentPlanActions } from '@entities/patient';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const TreatmentPlanStageNavigation = () => {
  const dispatch = useAppDispatch();
  const { isPlanDefined } = useTreatmentPlanStageContext();

  const handlePreviousStage = () => {
    dispatch(treatmentPlanActions.setCurrentStage('addPatient'));
  };

  const handleProceed = async () => {
    if (isPlanDefined) {
      // TODO:
      // 1. Create patient and retrieve it's id
      // 2. Map data using patientId and data from state
      // 3. Create treatment plan
    }
  };

  return (
    <div className={classes.btnsContainer}>
      <Button variant="outlined" onClick={handlePreviousStage}>
        <ArrowLeftSvg />
      </Button>
      <Button 
        styles={{
          container: cn(
            classes.processBtn.base, 
            !isPlanDefined && classes.processBtn.disabled
          ),
        }}
        disabled={!isPlanDefined}
        onClick={handleProceed}
      >
        PROCEED
      </Button>
    </div>
  );
};

export default TreatmentPlanStageNavigation;