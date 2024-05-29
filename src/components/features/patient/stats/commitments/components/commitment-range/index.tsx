import React, { Fragment } from 'react';

import { classes } from './index.tailwind';
import { useAppSelector } from '@shared/model';
import { selectPatientSelection } from '@app/store/entities/patient';
import { TCommitmentData } from '@app/store/entities/patient/model/types';
import { fillGaps, getStreakPointsFrom } from './utils';
import { healthIndicatorMap } from '@components/ui/common/journal-entries-carousel/mood-card/mood-item';
import StreakIndicator from '../streak-indicator';

export interface TCommitmentRangeProps {
  data: TCommitmentData[];
}

const CommitmentRange: React.FC<TCommitmentRangeProps> = ({ data }) => {
  const { range } = useAppSelector(selectPatientSelection);
  const filledData = fillGaps(data, range);
  const streakGroups = getStreakPointsFrom(filledData);

  return (
    <ul className={classes.container}>
      {streakGroups.map(({ isStreak, data }, idx) => {
        const key = data[0].date;

        return (
          <div key={key} className={classes.streakGroup}>
            {data.map((item) => (
              <li key={item.date} className={classes.item}>
                <p className="fs12Regular text-black/[.40]">{item.date}</p>
                <ul className="flex flex-col gap-1">
                  {item.moods.map((mood) => {
                    const { Icon, color } = healthIndicatorMap[mood.rate];
                    const icons = [];

                    for (let i = 0; i < mood.count; i++) {
                      icons.push(<Icon color={color} width={20} height={20} />);
                    }

                    return <Fragment>{icons.map((icon) => icon)}</Fragment>;
                  })}
                </ul>
              </li>
            ))}

            {isStreak && data.length > 1 ? <StreakIndicator streak={data.length} /> : null}
          </div>
        );
      })}
    </ul>
  );
};

export default CommitmentRange;
