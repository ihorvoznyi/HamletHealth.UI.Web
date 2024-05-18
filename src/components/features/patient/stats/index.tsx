import { Fragment } from 'react';

import Filter from '../filter';
import RelatedActivities from './related-activities';
import ActivityStreakLine from './daily-activity-moods';
import { Loader } from '@components/ui/common';
import { MoodPieChart } from '@components/ui/charts';

import { useConnect } from './connect';
import { useAppSelector } from '@shared/model';

import { ACTIVITY_STREAKS } from './daily-activity-moods/constants';
import { selectPatientStatistics } from '@app/store/entities/patient';

import { classes } from './index.tailwind';

const Stats = () => {
  const { isLoading } = useConnect();
  const { khiStatistics } = useAppSelector(selectPatientStatistics);

  return (
    <div className={classes.container}>
      <Filter />

      {!isLoading ? (
        <Fragment>
          <div className={classes.streaks}>
            {ACTIVITY_STREAKS.map(({ activity }) => (
              <ActivityStreakLine key={activity} activity={activity} />
            ))}
          </div>

          <div className={classes.chart}>
            <div className="flex flex-col mt-[32px] ml-10">
              <h2 className="fs22SemiBold">Mood Count</h2>
              <MoodPieChart data={khiStatistics} />
            </div>

            <RelatedActivities />
          </div>
        </Fragment>
      ) : (
        <Loader styles={{ container: 'text-center' }} />
      )}
    </div>
  );
};

export default Stats;
