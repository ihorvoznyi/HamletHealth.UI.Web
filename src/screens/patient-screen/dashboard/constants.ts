import { IPatientCard } from './patient-card';

interface Types {
  day: string;
  month: string;
  weekday: string;
  patients: IPatientCard[];
}

export const PATIENTS_DETAILS: Types[] = [
  {
    day: '5',
    month: 'Jun',
    weekday: 'SUN',
    patients: [
      {
        id: '1',
        fullname: 'Amanda Hug',   
        birthDate: 'Dec 20, 1985 (36 y.o.)',
        gender: 'female',
        diagnosis: 'Depressive disorder',
      },
      {
        id: '2',
        fullname: 'Brian P. McDonald',   
        birthDate: 'Dec 22, 1975 (46 y.o.)',
        gender: 'male',
        diagnosis: 'Depressive disorder',
      },
    ],
  },
  {
    day: '4',
    month: 'Jun',
    weekday: 'SAT',
    patients: [
      {
        id: '1',
        fullname: 'Amanda Hug',   
        birthDate: 'Dec 20, 1985 (36 y.o.)',
        gender: 'female',
        diagnosis: 'Depressive disorder',
      },
      {
        id: '2',
        fullname: 'Brian P. McDonald',   
        birthDate: 'Dec 22, 1975 (46 y.o.)',
        gender: 'male',
        diagnosis: 'Depressive disorder',
      },
    ],
  },
];