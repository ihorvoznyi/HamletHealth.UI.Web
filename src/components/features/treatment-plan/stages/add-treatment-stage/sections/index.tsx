import { shallowEqual } from 'react-redux';

import { Button } from '@components/ui/controls';
import Diagnosis from './diagnosis-section';
import Treatments from './selected-activities-section';
import ActivitiesMedicine from './activities-section';

import { useAppSelector } from '@shared/model';
import { useTreatmentPlanStageContext } from '../lib/context';

import { selectTreatmentPlanStage } from '@app/store/entities/treatment';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const TreatmentPlan = () => {
  const { openDefinePlanModal } = useTreatmentPlanStageContext();
  const { selectedActivities } = useAppSelector(selectTreatmentPlanStage, shallowEqual);

  const canDefinePlan = !!selectedActivities.length;

  const handleShowModal = () => {
    if (canDefinePlan) {
      openDefinePlanModal();
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
          container: cn(classes.defineBtn.base, !canDefinePlan ? classes.defineBtn.disabled : classes.defineBtn.active),
        }}
        disabled
        onClick={handleShowModal}
      >
        Define all as a plan
      </Button>
    </div>
  );
};

export default TreatmentPlan;
