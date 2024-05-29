import React, { Fragment, useMemo } from 'react';

import type { KeyHealthIndicatorRate, MoodType } from '@shared/lib/types';

import { classes } from './index.tailwind';
import { healthIndicatorMap } from '@components/ui/common/journal-entries-carousel/mood-card/mood-item';
import { TCommitmentData } from '@app/store/entities/patient/model/types';

interface PropsType {
  activity: string;
  data: TCommitmentData[];
}

const CommitmentHeader: React.FC<PropsType> = ({ activity, data }) => {
  const { total, streaks } = useMemo(() => {
    const result: Record<string, number> = {};

    data.forEach(({ moods }) => {
      moods.forEach((mood) => {
        const rate = result[mood.rate];
        if (!rate) {
          result[mood.rate] = mood.count;
        } else {
          result[mood.rate] += mood.count;
        }
      });
    });

    const streaks = Object.entries(result)
      .map(([key, value]) => ({
        rate: key as unknown as KeyHealthIndicatorRate,
        count: value,
      }))
      .sort((a, b) => b.count - a.count);

    const total = streaks.reduce((acc, item) => acc + item.count, 0);

    return { total, streaks };
  }, [activity, data]);

  return (
    <div className={classes.container}>
      <p className={classes.activity}>
        {activity}({total})
      </p>
      <ul className={classes.list}>
        {streaks.map((streak, idx) => {
          const { Icon, color } = healthIndicatorMap[streak.rate];
          return (
            <Fragment key={streak.rate}>
              <li className={classes.item}>
                <Icon width={16} height={16} color={color} />
                <span className={classes.streak} style={{ color }}>
                  {streak.count}X
                </span>
              </li>
              {idx < streaks.length - 1 ? <div className={classes.divider} /> : null}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default CommitmentHeader;
