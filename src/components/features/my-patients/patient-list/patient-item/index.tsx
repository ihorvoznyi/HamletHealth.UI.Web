import React from 'react';
import { useNavigate } from 'react-router-dom';

import { formatDateAndAge } from '../index.helper';
import { combineRoutes, retrieveInitials, toNormalCase } from '@utils/text.util';

import { APP_ROUTES } from '@configs/routes.config';

import { IPatient } from '@entities/patient';
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
  let birthDate = '-';

  if (typeof patient.gender === 'number') {
    gender = patient.gender === 1 ? 'female' : 'male';
  }

  if (typeof patient.birthDate === 'string') {
    const patientBirthDate = new Date(patient.birthDate);
    birthDate = formatDateAndAge(patientBirthDate);
  }

	const patientItem: IPatientItem = {
		id: patient.id,
		fullname: `${toNormalCase(patient.firstName)} ${toNormalCase(patient.lastName)}`,
		birthDate: birthDate,
		gender,
		healthProblem: '-',
	};

	return <PatientItem key={patient.id} patient={patientItem} />;
};
