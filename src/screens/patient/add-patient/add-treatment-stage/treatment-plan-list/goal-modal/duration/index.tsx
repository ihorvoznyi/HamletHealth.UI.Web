import { useState } from 'react';

import Button from '@components/ui/button';

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
        <Button styles={getBtnStyles(selected === 'day')} onClick={() => setSelected('day')}>Day</Button>
        <Button styles={getBtnStyles(selected === 'week')} onClick={() => setSelected('week')}>Week</Button>
        <Button styles={getBtnStyles(selected === 'month')} onClick={() => setSelected('month')}>Month</Button>
        <Button styles={getBtnStyles(selected === 'year')} onClick={() => setSelected('year')}>Year</Button>
      </div>
    </div>
  );  
};

export default Duration;
