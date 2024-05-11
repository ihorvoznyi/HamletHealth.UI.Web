import { FC } from 'react';

import { Button } from '@components/ui/controls';
import { Initials, JournalEntriesCarousel } from '@components/ui/common';

import type { JournalEntryProps } from '@components/ui/common/journal-entries-carousel/mood-card';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { useNavigate } from 'react-router-dom';

export interface IPatientCard {
  id: string;
  fullname: string;
  gender: string;
  diagnos: string;
  birthDate: string;
  entries: JournalEntryProps[]
}

interface PropsType {
  patinet: IPatientCard;
}

const PatientCard: FC<PropsType> = ({ patinet }) => {
  const navigate = useNavigate();

  const handleOpenProfile = () => {
    navigate('');
  };

  return (
    <div className={cn(classes.container, 'border-[#FFA553]')}>
      <div className={classes.infoContainer}>
        <Initials fullname={patinet.fullname} />
        <div>
          <p>{patinet.birthDate},</p>
          <p>{patinet.gender}</p>
          <p className={classes.diagnosis}>{patinet.diagnos}</p>
        </div>
        <Button variant="outlined" styles={classes.btn} onClick={handleOpenProfile}>
          Go to profile
        </Button>
      </div>

      <JournalEntriesCarousel entries={patinet.entries} />
    </div>
  );
};

export default PatientCard;
