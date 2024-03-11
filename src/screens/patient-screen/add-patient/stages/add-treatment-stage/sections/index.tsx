import { shallowEqual } from 'react-redux';

import { Button } from '@components/ui';
import Diagnosis from './diagnosis-section';
import Treatments from './selected-activities-section';
import ActivitiesMedicine from './activities-section';

import { useAppSelector } from '@shared/model';
import { useTreatmentPlanStageContext } from '../lib/context';

import { selectTreatmentPlanStage } from '@entities/treatment-plan';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const TreatmentPlan = () => {
  const { setIsOpen } = useTreatmentPlanStageContext();
  const { selectedActivities } = useAppSelector(selectTreatmentPlanStage, shallowEqual);
  
  const canDefinePlan = !!selectedActivities.length;

  const handleShowModal = () => {
    if (canDefinePlan) {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <h2 className={classes.title}>Add treatment plan</h2>
      <div className={classes.container}>
        <Diagnosis />
        <ActivitiesMedicine />
        <Treatments />
      </div>
      <Button 
        styles={{ 
          container: cn(
            classes.defineBtn.base,
            !canDefinePlan
              ? classes.defineBtn.disabled 
              : classes.defineBtn.active
          )}}
        disabled={!canDefinePlan}
        onClick={handleShowModal}
      >
        Define all as a plan
      </Button>
    </div>
  );
};

export default TreatmentPlan;
