import { useNavigate } from 'react-router-dom';

import PrimaryButton from '@components/ui/controls/button';
import { SuccessCircleCheckIcon } from '@components/ui/icons';

import { useAppSelector } from '@shared/model';

import { selectNormalizedPatientFullname } from '@entities/patient';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SuccessNotify = () => {
  const navigate = useNavigate();
  const fullname = useAppSelector(selectNormalizedPatientFullname);
  const handleNavigate = () => navigate(APP_ROUTES.MY_PATIENTS);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{fullname} profile is successfully added!</h1>
      <p className={classes.subtitle}>
        The patient will receive an email notification/SMS
        <br />
        with the link to download the app.
      </p>
      <SuccessCircleCheckIcon styles={classes.icon} />
      <PrimaryButton 
        variant="outlined" 
        onClick={handleNavigate} 
        styles={classes.btn}
      >
        Go to patient’s page
      </PrimaryButton>
    </div>
  );
};

export default SuccessNotify;