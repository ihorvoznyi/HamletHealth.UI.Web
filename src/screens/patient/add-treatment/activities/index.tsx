import Head from './head-block';
import Search from '@components/ui/search';
import Button from '@components/ui/button';
import { PlusSvg } from '@components/ui/icons';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { ACTIVITIES } from '../lib/activities.constants';

const ActivitiesMedicine = () => {  
  return (
    <div className={classes.container}>
      <Head />  

      <div>
        <Search />

        <ul className={`${classes.list}`}>
          {ACTIVITIES.map(activity => (
              <li 
                key={activity.name}
                className={classes.item}
              >
                <div className="text-[16px] font-roboto-500 tracking-[0.15px] text-black">
                  <p className="font-roboto-500">{activity.name}</p>
                  <span className={cn(
                      classes.type, 
                      activity.type === 'Activity' ? 'text-vivid-cerulean' : 'text-orange'
                    )}
                  >{activity.type}</span>
                </div>

                <Button styles={{ container: 'border-none gap-[2px]' }} type="outlined" onClick={() => {}}>
                  <PlusSvg className="w-[18px]" color="#4366C5" />
                  Add
                </Button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivitiesMedicine;