import { FC } from 'react';

import { Button } from '@components/ui/controls';
import { Initials, MoodCardList } from '@components/ui/common';

import { MOOD_CARDS } from '../mock';

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
        <Button variant="outlined" styles={classes.btn} onClick={handleOpenProfile}>
          Go to profile
        </Button>
      </div>

      <MoodCardList items={MOOD_CARDS} />
    </div>
  );
};

export default PatientCard;
