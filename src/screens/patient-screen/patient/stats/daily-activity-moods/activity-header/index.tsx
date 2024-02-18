import { FC, Fragment } from 'react';

import { MoodType } from '@shared/lib/types';

import { getMoodColor, groupByMood } from '../lib/helpers';
import { getMoodComponent } from '@utils/mood.util';

import { classes } from './index.tailwind';
import { DAILY_HITS_MOCK } from '../constants';

interface PropsType {
  activity: string;
}

const ActivityHeader: FC<PropsType> = ({ activity }) => {
  const streakDays = groupByMood(DAILY_HITS_MOCK.days);
  const streak = streakDays.map(item => item[1]).reduce((prev, curr) => prev + curr, 0);

  return (
    <div className={classes.container}>
        <p className={classes.activity}>{activity}({streak})</p>
        <ul className={classes.list}>
          {streakDays.map(([key, hits], idx) => {
            const mood = key as MoodType;
            
            const Component = getMoodComponent(mood)!;
            const color = getMoodColor(mood);

            return (
              <Fragment key={key}>
                <li className={classes.item}>
                  <Component width={16} height={16} color={color} />
                  <span className={classes.streak} style={{ color }}>{hits}X</span>
                </li>
                {idx < streakDays.length - 1 ? <div className={classes.divider} /> : null}
              </Fragment>
            );
          })}
        </ul>
      </div>
  );
};

export default ActivityHeader;