import { Button } from '@components/ui/controls';
import { ArrowLeftSvg } from '@components/ui/svg';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { useTreatmentPlanStageContext } from '../lib/context';

import { selectTreatmentPlanStage, treatmentPlanActions } from '@entities/patient';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { shallowEqual } from 'react-redux';

const TreatmentPlanStageNavigation = () => {
  const dispatch = useAppDispatch();
  const { selectedActivities } = useAppSelector(selectTreatmentPlanStage, shallowEqual);
  const { openTreatmentPlanCreationModal } = useTreatmentPlanStageContext();

  const canProceed = selectedActivities.length > 0;

  const handlePreviousStage = () => {
    dispatch(treatmentPlanActions.setCurrentStage('addPatient'));
  };

  const handleProceed = async () => {
    if (canProceed) {
      openTreatmentPlanCreationModal();
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
            !canProceed && classes.processBtn.disabled
          ),
        }}
        disabled={!canProceed}
        onClick={handleProceed}
      >
        PROCEED
      </Button>
    </div>
  );
};

export default TreatmentPlanStageNavigation;