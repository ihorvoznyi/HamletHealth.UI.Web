import { shallowEqual } from 'react-redux';

import DashedSvg from './icons/DashedSvg';
import StageCircle from './stage-circle';

import { useAppSelector } from '@shared/model';

import { getDashedSvgAttrs } from './lib';
import { selectStageStatusesAndCurrentStage } from '@entities/treatment-plan';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const StageBar = () => {
  const supporterStatus = 'unchecked';
  const { 
    currentStage,
    patientStageStatus, 
    treatmentStageStatus,  
  } = useAppSelector(selectStageStatusesAndCurrentStage, shallowEqual);

  return (
    <div className={classes.container}>
      <div className={classes.stageBarContainer}>
        <StageCircle position="left" status={patientStageStatus} isActive={currentStage === 'addPatient'} />
        <StageCircle position="right" status={supporterStatus} isActive={false} />
        <StageCircle position="center" status={treatmentStageStatus} isActive={currentStage === 'treatmentPlan'} />

        <DashedSvg {...getDashedSvgAttrs(patientStageStatus, treatmentStageStatus !== 'unchecked')} />
        <DashedSvg {...getDashedSvgAttrs(treatmentStageStatus, supporterStatus !== 'unchecked')} />
      </div>
      <div className={classes.contentContainer}>
        <p className={cn(classes.stage.base, classes.stage[patientStageStatus])}>add Patient&rsquo;s info</p>
        <p className={cn(classes.stage.base, classes.stage[treatmentStageStatus])}>add Tasks and activities</p>
        <p className={cn(classes.stage.base, classes.stage[supporterStatus])}>add Supporters</p>
      </div>
    </div>
  );
};

export default StageBar;
