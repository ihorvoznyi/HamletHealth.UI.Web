import PatientCard from '../patient-card';

import { classes } from './index.tailwind';
import { PATIENTS_DETAILS } from '../constants';

const PatientCardList = () => {
  return (
    <div className={classes.container}>
      {PATIENTS_DETAILS.map(item => (
        <div key={item.month + item.weekday}>
          <h2 className={classes.title}>{item.month} {item.day}</h2>
          <p className={classes.weekday}>{item.weekday}</p>

          <div className={classes.list}>
            {item.patients.map(patient => <PatientCard key={patient.id} patinet={patient} />)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientCardList;