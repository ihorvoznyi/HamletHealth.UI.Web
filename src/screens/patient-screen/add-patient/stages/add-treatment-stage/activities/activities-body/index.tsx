import { Search } from '@components/ui';
import ActivityItem from './activity-item';

import { useAppSelector } from '@shared/model';
import { useActivitiesContext } from '../lib/hooks';

import { classes } from './index.tailwind';
import { selectActivitiesByType } from '@entities/treatment-plan';

export const ActivitiesBody = () => {
  const { filterBy } = useActivitiesContext();
  const activities = useAppSelector(state => selectActivitiesByType(filterBy, state));

  return (
    <div>
      <Search />
      <ul className={classes.list}>
        {activities.map(activity => <ActivityItem key={activity.name} {...activity} />)}
      </ul>
    </div>
  );
};
