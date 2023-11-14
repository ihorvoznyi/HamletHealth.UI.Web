import { useState } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { FILTER_ITEMS } from './index.constants';
import { classes as commonClasses } from '@screens/patient/add-patient/add-treatment-stage/index.tailwind';

const Head = () => {
  const [activeId, setActiveId] = useState(FILTER_ITEMS[0].id);
  
  return (
    <div className={classes.container}>
      <div>
        <h4 className={commonClasses.title}>Activities & Medicines</h4>
        <p className={commonClasses.subtitle}>Activity & Medicine</p>
      </div>

      <div className={classes.filter.container}>
        {FILTER_ITEMS.map(item => (
          <span 
            key={item.id} 
            className={cn(
              classes.filter.item,
              activeId === item.id 
                ? classes.filter.active
                : classes.filter.inactive
            )}
            onClick={() => setActiveId(item.id)}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Head;