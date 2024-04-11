import React, { useMemo } from 'react';

import PatientItem from './patient-item';

import { includesCaseInsensitive, toNormalCase } from '@utils/text.util';

import { IPatient } from '@entities/treatment-plan';
import { IPatientItem } from './index.interfaces';

import { classes } from './index.tailwind';
import { useMyPatientContext } from '../lib';

interface PropsType {
  patients: IPatient[];
}

const PatientList: React.FC<PropsType> = ({ patients }) => {
  const { sortBy, searchTerm } = useMyPatientContext();

	const patientsRecord = useMemo(() => {
    const filterBySearchTerm = patients.filter(({ firstName, lastName }) => {
      const fullname = `${firstName} ${lastName}`;
      return includesCaseInsensitive(fullname, searchTerm);
    });

    const groupRecord = groupByFirstLetter(filterBySearchTerm);
    const sortedRecord = sortRecordBy(groupRecord, sortBy);

    return sortedRecord;
  }, [patients, sortBy, searchTerm]);

	return (
		<div className={classes.container}>
			{patientsRecord.map(({ key, items }) => (
        <React.Fragment key={key}>
          <div>
            <p className={classes.sectionName}>{key}</p>
            <ul className={classes.list}>
              {items.map(renderPatientItem)}
            </ul>
          </div>
        </React.Fragment>
			))}
		</div>
	);
};

export default PatientList;

const groupByFirstLetter = (items: IPatient[]) => {
  const group = items.reduce((acc: Record<string, IPatient[]>, item) => {
		const firstLetter = item.firstName[0].toUpperCase();

		if (!acc[firstLetter]) {
			acc[firstLetter] = [];
		}

		acc[firstLetter].push(item);

		return acc;
	}, {});

  return group;
};

const renderPatientItem = (patient: IPatient) => {
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

function formatDateAndAge(dateOfBirth: Date): string {
  const formatDate = (date: Date): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassedThisYear =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

    if (isBirthdayPassedThisYear) {
      age--;
    }

    return age;
  };

  const formattedDate = formatDate(dateOfBirth);
  const age = calculateAge(dateOfBirth);

  return `${formattedDate} (${age} y.o.)`;
}


const sortRecordBy = (record: Record<string, IPatient[]>, direction: 'ASC' | 'DESC' = 'ASC') => {
  const sortedKeys = Object.keys(record).sort((a, b) => {
    const charCodeA = a.toUpperCase().charCodeAt(0);
    const charCodeB = b.toUpperCase().charCodeAt(0);

    if (direction === 'ASC') {
      return charCodeA < charCodeB ? -1 : charCodeA > charCodeB ? 1 : 0;
    } else {
      return charCodeA > charCodeB ? -1 : charCodeA < charCodeB ? 1 : 0;
    }
  });

  const sortedRecord: { key: string, items: IPatient[] }[] = [];
  sortedKeys.forEach(key => {
    sortedRecord.push({ key, items: record[key] });
  });

  return sortedRecord;
};
