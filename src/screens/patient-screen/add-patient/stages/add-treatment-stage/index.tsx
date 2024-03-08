import { shallowEqual } from 'react-redux';
import { useEffect, useState } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import TreatmentPlan from './treatment-plan-sections';
import { Button } from '@components/ui';
import { ArrowLeftSvg } from '@components/ui/svg';

import { useAppDispatch, useAppSelector } from '@shared/model';

import { treatmentPlanSlice, selectTreatmentPlanStage } from '@entities/treatment-plan';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const AddTreatmentStage = () => {
  const dispatch = useAppDispatch();
  const { stageStatus, diagnosis } = useAppSelector(selectTreatmentPlanStage, shallowEqual);
  const { setStageStatus, setCurrentStage } = bindActionCreators(treatmentPlanSlice.actions, dispatch);

  const [isDefined, setIsDefined] = useState(false);

  useEffect(() => {
    if (stageStatus !== 'filled') {
      setStageStatus('checked');
    }
  }, []);

  const handlePreviousStage = () => {
    setCurrentStage('addPatient');
  };

  const handleNextStage = () => {
    //
  };
  
  return (
    <>
      <div>
        <h2 className="fs26SemiBold">Add treatment plan</h2>
        <TreatmentPlan>
          <TreatmentPlan.Diagnosis diagnosis={diagnosis} />
          <TreatmentPlan.ActivitiesMedicine />
          <TreatmentPlan.Treatments />
        </TreatmentPlan>
        <Button 
          styles={{ container: cn(
            classes.defineBtn.base,
            !diagnosis.length
              ? classes.defineBtn.disabled 
              : classes.defineBtn.active
          )}}
          disabled={!diagnosis.length}
          onClick={() => setIsDefined(prev => !prev)}
        >
          Define all as a plan
        </Button>
      </div>

      <div className={classes.btnsContainer}>
        <Button type="outlined" onClick={handlePreviousStage}><ArrowLeftSvg /></Button>
        <Button 
          styles={{
            container: cn(
              classes.processBtn.base, 
              !isDefined && classes.processBtn.disabled
            ),
          }}
          disabled={!isDefined}
          onClick={handleNextStage}>PROCEED</Button>
      </div>
    </>
  );
};

export default AddTreatmentStage;
