import Filter from '../filter';
import RelatedActivities from './related-activities';
import DailyActivityMoods from './daily-activity-moods';

import { ACTIVITY_STREAKS } from './daily-activity-moods/constants';

import { classes } from './index.tailwind';
import { useConnect } from './connect';
import { useAppSelector } from '@shared/model';

import { MoodPieChart } from '@components/ui/charts';
import { selectPatientStatistics } from '@app/store/entities/patient';
import { useEffect } from 'react';
import { useLoading } from '@hooks/useLoading';
import { Loader } from '@components/ui/common';

const Stats = () => {
  const { setGlobalLoader } = useLoading();
  const { isLoading } = useConnect();
  const { khiStatistics } = useAppSelector(selectPatientStatistics);

  if (isLoading) {
    return <Loader styles={{ container: 'text-center' }}/>;
  }
  return (
    <div className={classes.container}>
      <Filter />

      <div className={classes.streaks}>
        {ACTIVITY_STREAKS.map(({ activity }) => (
          <DailyActivityMoods key={activity} activity={activity} />
        ))}
      </div>

      <div className={classes.chart}>
        <div className="flex flex-col mt-[32px] ml-10">
          <h2 className="fs22SemiBold">Mood Count</h2>
          <MoodPieChart data={khiStatistics} />
        </div>
        
        <RelatedActivities />
      </div>
    </div>
  );
};

export default Stats;
