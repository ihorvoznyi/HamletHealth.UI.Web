import { useState } from 'react';

import Button from '@components/ui/button';

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
        <Button styles={getBtnStyles(weekDay === 'mon')} onClick={() => setWeekDay('mon')}>Mon</Button>
        <Button styles={getBtnStyles(weekDay === 'tue')} onClick={() => setWeekDay('tue')}>Tue</Button>
        <Button styles={getBtnStyles(weekDay === 'wed')} onClick={() => setWeekDay('wed')}>Wed</Button>
        <Button styles={getBtnStyles(weekDay === 'thu')} onClick={() => setWeekDay('thu')}>Thu</Button>
        <Button styles={getBtnStyles(weekDay === 'fri')} onClick={() => setWeekDay('fri')}>Fri</Button>
        <Button styles={getBtnStyles(weekDay === 'sat')} onClick={() => setWeekDay('sat')}>Sat</Button>
        <Button styles={getBtnStyles(weekDay === 'sun')} onClick={() => setWeekDay('sun')}>Sun</Button>
      </div>
    </div>
  );
};

export default WeekDays;