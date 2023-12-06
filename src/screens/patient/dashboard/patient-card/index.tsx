import { FC } from 'react';

import Button from '@components/ui/button';
import MoodList from './mood-card-list';
import Initials from '@screens/patient/shared/initials';
import { BedSvg, SyropSvg, PizzaSvg } from '@components/ui/icons';

import { IMoodCard } from './mood-card';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export interface IPatientCard {
  id: string;
  fullname: string;
  gender: string;
  birthDate: string;
  diagnosis: string;
}

interface PropsType {
  patinet: IPatientCard;
}

const PatientCard: FC<PropsType> = ({ patinet }) => {
  const handleOpenProfile = () => {
    // 
  };

  return (
    <div className={cn(classes.container, 'border-[#FFA553]')}>
      <div className={classes.infoContainer}>
        <Initials fullname={patinet.fullname} />
        <div>
          <p>{patinet.birthDate},</p>
          <p>{patinet.gender}</p>
          <p className={classes.diagnosis}>{patinet.diagnosis}</p>
        </div>
        <Button type="outlined" styles={classes.btn} onClick={handleOpenProfile}>
          Go to profile
        </Button>
      </div>

      <MoodList items={MOOD_CARDS} />
    </div>
  );
};

export default PatientCard;

const MOOD_CARDS: IMoodCard[] = [
  {
    id: '1',
    text: 'I&rsquo;m having a great day. I feel positive!',
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
    text: 'I&rsquo;m having a great day. I feel positive!',
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
    text: 'I&rsquo;m having a great day. I feel positive!',
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
    text: 'I&rsquo;m having a great day. I feel positive!',
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
    text: 'I&rsquo;m having a great day. I feel positive!',
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