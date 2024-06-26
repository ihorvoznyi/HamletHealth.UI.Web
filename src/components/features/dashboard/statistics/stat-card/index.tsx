import { FC, ReactElement } from 'react';
import { classes } from './index.tailwind';

interface PropsType {
  label: string;
  value?: number;
  Icon: ReactElement;
}

const StatCard: FC<PropsType> = ({ label, value, Icon }) => {
  return (
    <div className={classes.container}>
      <p className={classes.label}>{label}</p>
      <div className={classes.valueContainer}>
        {Icon}
        <p className={classes.value}>{value ?? 0}</p>
      </div>
    </div>
  );
};

export default StatCard;