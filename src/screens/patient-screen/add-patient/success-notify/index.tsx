import { useNavigate } from 'react-router-dom';

import Button from '@components/ui/button';
import { SuccessCircleCheckIcon } from '@components/ui/icons';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SuccessNotify = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(APP_ROUTES.MY_PATIENTS);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Amanda Hug profile is successfully added!</h1>
      <p className={classes.subtitle}>
        The patient will receive an email notification/SMS
        <br />
        with the link to download the app.
      </p>
      <SuccessCircleCheckIcon styles={classes.icon} />
      <Button 
        type="outlined" 
        onClick={handleNavigate} 
        styles={classes.btn}
      >
        Go to patient’s page
      </Button>
    </div>
  );
};

export default SuccessNotify;