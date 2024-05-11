import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/ui/controls';
import { Initials, JournalEntriesCarousel } from '@components/ui/common';

import type { Patient } from '@app/store/entities/patient/model/types';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { APP_ROUTES } from '@configs/routes.config';

interface PropsType {
  patinet: Patient;
}

const PatientCard: FC<PropsType> = ({ patinet }) => {
  const navigate = useNavigate();

  const handleOpenProfile = () => {
    navigate(`${APP_ROUTES.MY_PATIENTS}/${patinet.id}`);
  };

  return (
    <div className={cn(classes.container, 'border-[#FFA553]')}>
      <div className={classes.infoContainer}>
        <Initials fullname={patinet.fullname} />
        <div>
          <p>{patinet.birthDate},</p>
          <p>{patinet.gender}</p>
          <p className={classes.diagnosis}>{patinet.plan?.diagnos ?? '-'}</p>
        </div>
        <Button variant="outlined" styles={classes.btn} onClick={handleOpenProfile}>
          Go to profile
        </Button>
      </div>

      <JournalEntriesCarousel entries={patinet.journalEntries} />
    </div>
  );
};

export default PatientCard;
