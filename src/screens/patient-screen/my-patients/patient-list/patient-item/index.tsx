import React from 'react';
import { useNavigate } from 'react-router-dom';

import { retrieveInitials } from '@screens/patient-screen/shared/patient.helpers';
import { formatDateAndAge } from '../index.helper';
import { combineRoutes, toNormalCase } from '@utils/text.util';

import { APP_ROUTES } from '@configs/routes.config';

import { IPatient } from '@entities/treatment-plan';
import { IPatientItem } from '../index.interfaces';

import { classes } from './index.tailwind';

interface PropsType {
  patient: IPatientItem;
}

const PatientItem: React.FC<PropsType> = ({ patient }) => {
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

export const renderPatientItem = (patient: IPatient) => {
  let gender = '-';

  if (patient.gender) {
    gender = patient.gender === 1 ? 'male' : 'female';
  }

  // TODO: sync with backend
  const dateMock = new Date(2010, 5, 3, 10);

	const patientItem: IPatientItem = {
		id: patient.id,
		fullname: `${toNormalCase(patient.firstName)} ${toNormalCase(patient.lastName)}`,
		birthDate: formatDateAndAge(dateMock),
		gender,
		healthProblem: '-',
	};

	return <PatientItem key={patient.id} patient={patientItem} />;
};
