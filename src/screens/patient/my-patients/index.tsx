import Head from './head';
import { classes } from './index.tailwind';
import PatientList from './patient-list';

const MyPatients = () => {
  return (
    <div className={classes.container}>
      <Head />
      <PatientList />
    </div>
  );
};

export default MyPatients;
