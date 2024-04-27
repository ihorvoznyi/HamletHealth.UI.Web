import { useNavigate } from 'react-router-dom';

import { Button } from '@components/ui/controls';
import { FlowerSvg } from '@components/ui/svg';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const VerifiedEmail = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <FlowerSvg />

      <div className={classes.content}>
        <h1 className={classes.title}>Account is verified!</h1>
        <p className={classes.paragraph}>
          You have successfully verified your account.
        </p>
        
        <Button styles={classes.btn} onClick={() => navigate(APP_ROUTES.DASHBOARD)}>Go to dashboard</Button>
      </div>
    </div>
  );
};

export default VerifiedEmail;