import Head from './head-block';
import Search from '@components/ui/search';
import ListItem from './activity-item';

import { classes } from './index.tailwind';
import { classes as commonClasses } from '@screens/patient/add-treatment/index.tailwind';
import { ACTIVITIES } from '../lib/activities.constants';

const ActivitiesMedicine = () => {  
  return (
    <div className={classes.container}>
      <Head />  
      
      <div>
        <Search />
        <ul className={commonClasses.list}>
          {ACTIVITIES.map(activity => <ListItem key={activity.name} {...activity} />)}
        </ul>
      </div>
    </div>
  );
};

export default ActivitiesMedicine;