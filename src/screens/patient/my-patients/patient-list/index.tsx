import { IPatientSection } from './index.interfaces';
import { classes } from './index.tailwind';
import PatientItem from './patient-item';

const PatientList = () => {
  return (
    <div className={classes.container}>
      {/* Temp solution using `idx` */}
      {patientsMock.map((section, idx) => (
          <div key={idx}>
            <p className={classes.sectionName}>{section.section}</p>
            
            <ul className={classes.list}>
              {section.data.map((patient, idx) => <PatientItem key={idx} patient={patient} />)}
            </ul>
          </div>
      ))}
    </div>
  );
};

export default PatientList;

const patientsMock: IPatientSection[] = [
  {
    section: 'A',
    data: [
      {
        id: 'c14a9d7f-62e8-4a3b-8c92-6a2a18f5f4a1',
        fullname: 'Abraham J. George',
        birthDate: 'Jul 2, 2002 (19 y.o.)',
        gender: 'male',
        healthProblem: 'Eating disorder'
      },
      {
        id: '9b0bdc98-3e20-4fcf-b42a-7d5e92e15a8f',
        fullname: 'Alisa Connor',
        birthDate: 'Jul 2, 2002 (19 y.o.)',
        gender: 'female',
        healthProblem: 'Personality disorder, post-traumatic stress disorder'
      },
    ],
  },
  {
    section: 'B',
    data: [
      {
        id: 'f9e8d2a6-71d4-4b48-9f3c-2e773a5c9167',
        fullname: 'Brett D. Rone',
        birthDate: 'Jul 2, 2002 (19 y.o.)',
        gender: 'female',
        healthProblem: 'Post-traumatic stress disorder'
      },
      {
        id: '874b2f3c-d1ac-4b6e-b42d-81c4af79e555',
        fullname: 'Brian P. McDonald',
        birthDate: 'Jul 2, 2002 (19 y.o.)',
        gender: 'male',
        healthProblem: 'Personality disorder, post-traumatic stress disorder'
      }
    ],
  },
  {
    section: 'S',
    data: [
      {
        id: '5f76a2e9-2aa2-43f7-8e23-1b45c8e4e3c6',
        fullname: 'Skott Wiliams',
        birthDate: 'Jul 2, 2002 (19 y.o.)',
        gender: 'male',
        healthProblem: 'Eating disorder'
      },
    ],
  },
];
