import React from 'react';
import { useNavigate } from 'react-router-dom';

import { formatISOString } from '@utils/date.util';
import { getGenderName } from '@utils/gender.util';
import { combineRoutes, retrieveInitials, toNormalCase } from '@utils/text.util';

import { APP_ROUTES } from '@configs/routes.config';

import type { IPatient } from '@app/store/entities/treatment';
import type { IPatientItem } from '../index.interfaces';

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
      <p className={classes.description}>{patient.diagnos}</p>
    </div>
  );
};

export const renderPatientItem = (patient: IPatient) => {
	const patientItem: IPatientItem = {
		id: patient.id,
		fullname: `${toNormalCase(patient.firstName)} ${toNormalCase(patient.lastName)}`,
		birthDate: formatISOString(patient.birthDate),
		gender: getGenderName(patient.gender),
		diagnos: patient.diagnos.length ? patient.diagnos : '-',
	};

	return <PatientItem key={patient.id} patient={patientItem} />;
};
