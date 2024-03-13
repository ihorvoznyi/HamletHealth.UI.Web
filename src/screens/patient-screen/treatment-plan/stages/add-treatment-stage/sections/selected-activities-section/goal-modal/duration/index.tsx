import { useState } from 'react';

import PrimaryButton from '@components/ui/button';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

type DurationTypes = 'day' | 'week' | 'month' | 'year';

const Duration = () => {
  const [selected, setSelected] = useState<DurationTypes>('day');

  const getBtnStyles = (isActive: boolean) => ({ 
    container: cn(classes.btn.base, isActive && classes.btn.active) 
  });
  
  return (
    <div className={classes.container}>
      <p className={classes.paragraph}>per</p>
      
      {/* Durations Component */}
      <div className={classes.btnsContainer}>
        <PrimaryButton styles={getBtnStyles(selected === 'day')} onClick={() => setSelected('day')}>Day</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(selected === 'week')} onClick={() => setSelected('week')}>Week</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(selected === 'month')} onClick={() => setSelected('month')}>Month</PrimaryButton>
        <PrimaryButton styles={getBtnStyles(selected === 'year')} onClick={() => setSelected('year')}>Year</PrimaryButton>
      </div>
    </div>
  );  
};

export default Duration;
