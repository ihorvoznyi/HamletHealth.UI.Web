import { FC } from 'react';

import Button from '@components/ui/button';
import MoodList from './mood-card-list';
import Initials from '@screens/patient/shared/initials';

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

      <MoodList />
    </div>
  );
};

export default PatientCard;