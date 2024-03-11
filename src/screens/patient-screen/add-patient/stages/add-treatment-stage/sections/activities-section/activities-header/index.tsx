import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { FILTER_ITEMS } from './index.constants';
import { classes as commonClasses } from '../../../index.tailwind';
import { useActivitiesContext } from '../lib/hooks';

const ActivitiesHeader = () => {
  const { filterBy, setFilterBy } = useActivitiesContext();
  
  return (
    <div className={classes.container}>
      <div>
        <h4 className={commonClasses.title}>Activities & Medicines</h4>
        <p className={commonClasses.subtitle}>Activity & Medicine</p>
      </div>

      <div className={classes.filter.container}>
        {FILTER_ITEMS.map(item => {
          const isActive = filterBy === item.type;

          return (
            <span 
              key={item.type} 
              className={cn(
                classes.filter.item,
                isActive
                  ? classes.filter.active
                  : classes.filter.inactive
              )}
              onClick={() => setFilterBy(item.type)}>{item.text}</span>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitiesHeader;