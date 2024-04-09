import { Search } from '@components/ui';
import ActivityItem from './activity-item';

import { useAppSelector } from '@shared/model';
import { useActivitiesContext } from '../lib/hooks';

import { classes } from './index.tailwind';
import { selectActivities } from '@entities/treatment-plan';

export const ActivitiesBody = () => {
  const { filterBy, searchStatement, setSearchStatement, } = useActivitiesContext();
  const activities = useAppSelector(state => selectActivities(state, { filterBy, searchTerm: searchStatement }));

  return (
    <div>
      <Search onChange={setSearchStatement} />
      <ul className={classes.list}>
        {activities.map(activity => <ActivityItem key={activity.name} {...activity} />)}
      </ul>
    </div>
  );
};
