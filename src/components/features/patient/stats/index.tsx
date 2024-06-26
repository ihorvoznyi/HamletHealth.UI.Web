import { Fragment, useEffect } from 'react';

import Filter from '../filter';
import RelatedActivities from './related-activities';
import ActivityStreakLine from './daily-activity-moods';
import { Loader } from '@components/ui/common';
import { LinearChart, MoodPieChart } from '@components/ui/charts';

import { useConnect } from './connect';
import { useAppSelector } from '@shared/model';

import { ACTIVITY_STREAKS } from './daily-activity-moods/constants';
import { selectPatientStatistics } from '@app/store/entities/patient';

import { classes } from './index.tailwind';
import Commitments from './commitments';

const Stats = () => {
  const { isLoading, lineChartData } = useConnect();
  const { khiStatistics } = useAppSelector(selectPatientStatistics);

  return (
    <div className={classes.container}>
      <Filter />

      {!isLoading ? (
        <Fragment>
          <LinearChart data={lineChartData} />
          <Commitments />
          <div className={classes.chart}>
            <div className={classes.pieChartContainer}>
              <h2 className={classes.pieChartTitle}>Mood Count</h2>
              <MoodPieChart data={khiStatistics} />
            </div>

            <RelatedActivities />
          </div>
        </Fragment>
      ) : (
        <Loader styles={classes.loader} />
      )}
    </div>
  );
};

export default Stats;
