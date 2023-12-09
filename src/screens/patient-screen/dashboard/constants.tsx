import { BedSvg, SyropSvg, PizzaSvg } from '@components/ui/svg';
import { IMoodCard } from '../shared/mood-card-list/mood-card';
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

export const MOOD_CARDS: IMoodCard[] = [
  {
    id: '1',
    text: 'I\'m having a great day. I feel positive!',
    time: '14:11',
    moods: ['great', 'normal'],
    recipes: [
      {
        Icon: <BedSvg />,
        text: 'Sleep early'
      },
      {
        Icon: <SyropSvg />,
        text: 'Omindon 8mg'
      },
      {
        Icon: <PizzaSvg />,
        text: 'Fast food'
      },
    ],
  },
  {
    id: '2',
    text: 'I\'m having a great day. I feel positive!',
    time: '13:30',
    moods: ['normal'],
    recipes: [
      {
        Icon: <PizzaSvg />,
        text: 'Fast food'
      },
    ],
  },
  {
    id: '3',
    text: 'I\'m having a great day. I feel positive!',
    time: '15:45',
    moods: ['great'],
    recipes: [
      {
        Icon: <BedSvg />,
        text: 'Sleep early'
      },
      {
        Icon: <SyropSvg />,
        text: 'Omindon 8mg'
      },
    ],
  },
  {
    id: '4',
    text: 'I\'m having a great day. I feel positive!',
    time: '15:45',
    moods: ['great'],
    recipes: [
      {
        Icon: <BedSvg />,
        text: 'Sleep early'
      },
      {
        Icon: <SyropSvg />,
        text: 'Omindon 8mg'
      },
    ],
  },
  {
    id: '5',
    text: 'I\'m having a great day. I feel positive!',
    time: '15:45',
    moods: ['great'],
    recipes: [
      {
        Icon: <BedSvg />,
        text: 'Sleep early'
      },
      {
        Icon: <SyropSvg />,
        text: 'Omindon 8mg'
      },
    ],
  },
];