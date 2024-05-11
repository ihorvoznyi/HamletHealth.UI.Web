import { FC, Fragment } from 'react';
import renderKeyHealthIndicator from '../mood-item';

import { classes } from './index.tailwind';
import { HealthIndicator } from '@app/store/entities/patient/model/types';

interface PropsType {
  moods: HealthIndicator[];
}

const MoodVarieties: FC<PropsType> = ({ moods }) => {
  return (
    <div className={classes.container}>
      {moods.map(item => (
        <Fragment key={item.rate}>
          {renderKeyHealthIndicator(item)}
        </Fragment>
      ))}
    </div>
  );
};

export default MoodVarieties;