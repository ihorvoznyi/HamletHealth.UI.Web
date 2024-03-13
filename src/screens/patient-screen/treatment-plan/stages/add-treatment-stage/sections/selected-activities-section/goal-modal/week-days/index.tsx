import { useState } from 'react';

import PrimaryButton from '@components/ui/button';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

type WeekdaysType = '' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

const WeekDays = () => {
  const [weekDay, setWeekDay] = useState<WeekdaysType>('');

  const getBtnStyles = (isActive: boolean) => ({ 
    container: cn(classes.btn.base, isActive && classes.btn.active) 
  });

  return (
    <div className={classes.container}>
      <p className={classes.paragraph}>Days of the week (optional)</p>
      
      <div className={classes.btnsContainer}>
        <PrimaryButton styles={getBtnStyles(weekDay === 'mon')} onClick={() => setWeekDay('mon')}>Mon</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(weekDay === 'tue')} onClick={() => setWeekDay('tue')}>Tue</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(weekDay === 'wed')} onClick={() => setWeekDay('wed')}>Wed</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(weekDay === 'thu')} onClick={() => setWeekDay('thu')}>Thu</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(weekDay === 'fri')} onClick={() => setWeekDay('fri')}>Fri</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(weekDay === 'sat')} onClick={() => setWeekDay('sat')}>Sat</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(weekDay === 'sun')} onClick={() => setWeekDay('sun')}>Sun</PrimaryButton>
      </div>
    </div>
  );
};

export default WeekDays;