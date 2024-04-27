import { DateBar, Statistics, PatientCardList } from '@components/features/dashboard';

import { classes } from './index.tailwind';

const DashboardPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h2 className={classes.title}>Dashboard</h2>
        <Statistics />
      </div>

      <div className={classes.dataContainer}>
        <DateBar />
        <PatientCardList />
      </div>
    </div>
  );
};

export default DashboardPage;