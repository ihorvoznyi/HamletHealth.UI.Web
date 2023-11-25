import { shallowEqual } from 'react-redux';

import DashedSvg from './icons/DashedSvg';
import StageCircle from './stage-circle';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { useAppSelector } from '@shared/model';
import { getDashedSvgAttrs, selectStages } from './lib';

const StageBar = () => {
  const { patientStatus, treatmentStatus, supporterStatus, current } = useAppSelector(selectStages, shallowEqual);

  return (
    <div className={classes.container}>
      <div className={classes.stageBarContainer}>
        <StageCircle position="left" status={patientStatus} isActive={current === 'patient'} />
        <StageCircle position="right" status={supporterStatus} isActive={current === 'supporter'} />
        <StageCircle position="center" status={treatmentStatus} isActive={current === 'treatment'} />

        <DashedSvg {...getDashedSvgAttrs(patientStatus, treatmentStatus !== 'unchecked')} />
        <DashedSvg {...getDashedSvgAttrs(treatmentStatus, supporterStatus !== 'unchecked')} />
      </div>
      <div className={classes.contentContainer}>
        <p className={cn(classes.stage.base, classes.stage[patientStatus])}>add Patient&rsquo;s info</p>
        <p className={cn(classes.stage.base, classes.stage[treatmentStatus])}>add Tasks and activities</p>
        <p className={cn(classes.stage.base, classes.stage[supporterStatus])}>add Supporters</p>
      </div>
    </div>
  );
};

export default StageBar;
