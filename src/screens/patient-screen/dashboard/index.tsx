import DateBar from './date-bar';
import Statistics from './statistics';
import PatientCardList from './patient-card-list';

import { classes } from './index.tailwind';

const Dashboard = () => {
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

export default Dashboard;