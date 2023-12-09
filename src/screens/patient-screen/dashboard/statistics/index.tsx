import StatCard from '../stat-card';
import { ContentIcon, ErrorIcon, PatientIcon, SettingsIcon } from '../dashboard-icons';

import { classes } from './index.tailwind';

const Statistics = () => {
  return (
    <div className={classes.container}>
      <StatCard label="My patients" value="167" Icon={<PatientIcon />} />
      <StatCard label="Accounts need setup" value="16" Icon={<SettingsIcon />} />
      <StatCard label="Entries to monitor" value="32" Icon={<ContentIcon />} />
      <StatCard label="Patient has a critical issue" value="1" Icon={<ErrorIcon />} />
    </div>
  );
};

export default Statistics;