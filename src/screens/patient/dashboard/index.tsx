import StatCard from './stat-card';
import { ContentIcon, ErrorIcon, PatientIcon, SettingsIcon } from './icons';

import { classes } from './index.tailwind';

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Dashboard</h2>
      
      <div className={classes.statContainer}>
        <StatCard label="My patients" value="167" Icon={<PatientIcon />} />
        <StatCard label="Accounts need setup" value="16" Icon={<SettingsIcon />} />
        <StatCard label="Entries to monitor" value="32" Icon={<ContentIcon />} />
        <StatCard label="Patient has a critical issue" value="1" Icon={<ErrorIcon />} />
      </div>
    </div>
  );
};

export default Dashboard;