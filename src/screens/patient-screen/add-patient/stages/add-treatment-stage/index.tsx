import { FC, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

import Diagnosis from './diagnosis';
import ActivitiesMedicine from './activities';
import Treatment from './treatment-plan-list';
import Button from '@components/ui/button';
import { ArrowLeftSvg } from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { treatmentList } from './treatment-plan-list/index.constants';
import { useAppDispatch, useAppSelector } from '@shared/model';
import { selectStageStatuses, setCurrentStage, setStageStatus } from '../../stage-bar/lib';
import { useGetDiagnosisQuery } from '@entities/patient/api';

interface PropsType {
  onProcess: () => void;
  onReturn: () => void;
}

const AddTreatmentStage: FC<PropsType> = ({ onReturn, onProcess }) => {
  const dispatch = useAppDispatch();
  const { treatmentStatus } = useAppSelector(selectStageStatuses, shallowEqual);
  const { data, isLoading, isError } = useGetDiagnosisQuery();
  const [isDefined, setIsDefined] = useState(false);
  const [isEmpty, _] = useState(!treatmentList.length);

  // const { diagnosis, activities, medications } = usePrepareTreatmentStage();

  useEffect(() => {
    if (treatmentStatus !== 'filled') {
      dispatch(setStageStatus({ stage: 'treatmentStatus', status: 'checked' }));
    }
    dispatch(setCurrentStage('treatment'));
  }, []);
  
  return (
    <>
      <div>
        <h2 className="fs26SemiBold">Add treatment plan</h2>

        <div className={classes.sections}>
          <Diagnosis />
          <ActivitiesMedicine />
          <Treatment />
        </div>

        <Button 
          styles={{ container: cn(
            classes.defineBtn.base,
            isEmpty 
              ? classes.defineBtn.disabled 
              : classes.defineBtn.active
          )}}
          disabled={isEmpty}
          onClick={() => setIsDefined(prev => !prev)}
        >
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
