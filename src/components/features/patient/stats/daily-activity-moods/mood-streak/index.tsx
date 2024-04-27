import { Fragment } from 'react';

import StreakLine from '../streak-line';

import { getMoodComponent } from '@utils/mood.util';
import { getMoodColor } from '../lib/helpers';

import { STREAKS_MOCK } from '../constants';
import { classes } from './index.tailwind';

const ActivityStreak = () => {
  return (
    <ul className={classes.container}>
      {STREAKS_MOCK.map(({ isStreak, days }) => {
        const key = days[0].date;

        return (
          <Fragment key={key}>
            <div className={classes.streakGroup}>
              {days.map(({ mood, date, isDone }) => {
                let Component;
                let color;

                if (isDone) {
                  Component = getMoodComponent(mood)!;
                  color = getMoodColor(mood);
                }

                return (
                  <li key={date} className={classes.item}>
                    <p className="fs12Regular text-black/[.40]">{date}</p>
                    {Component ? <Component color={color} width={20} height={20} />: null}
                  </li>
                );
              })}

              {isStreak ? <StreakLine streak={days.length} /> : null}
            </div>
          </Fragment>
        );
      })}
    </ul>
  );
};

export default ActivityStreak;