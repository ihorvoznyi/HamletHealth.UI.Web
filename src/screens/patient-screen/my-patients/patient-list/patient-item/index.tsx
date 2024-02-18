import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPatientItem } from '../index.interfaces';

import { classes } from './index.tailwind';
import { APP_ROUTES } from '@configs/routes.config';
import { combineRoutes } from '@utils/text.util';
import { retrieveInitials } from '@screens/patient-screen/shared/patient.helpers';

interface PropsType {
  patient: IPatientItem;
}

const PatientItem: FC<PropsType> = ({ patient }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(combineRoutes(APP_ROUTES.MY_PATIENTS, patient.id));
  };

  return (
    <div className={classes.container} onClick={handleNavigate}>
      <div className={classes.nameContainer}>
        <p className={classes.initials}>{retrieveInitials(patient.fullname)}</p>
        <p>{patient.fullname}</p>
      </div>
      <p className={classes.birthDate}>{patient.birthDate}</p>
      <p className={classes.gender}>{patient.gender}</p>
      <p className={classes.description}>{patient.healthProblem}</p>
    </div>
  );
};

export default PatientItem;