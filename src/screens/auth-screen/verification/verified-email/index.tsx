import PrimaryButton from '@components/ui/button';
import FlowerIcon from '@components/ui/svg/FlowerSvg';

import { classes } from './index.tailwind';
import { classes as commonClasses } from '../index.tailwind';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@configs/routes.config';

export const VerifiedEmail = () => {
  const navigate = useNavigate();

  return (
    <div className={commonClasses.container}>
      <FlowerIcon />

      <div className={classes.contentContainer}>
        <h1 className={commonClasses.title}>Account is verified!</h1>
        <p className={classes.paragraph}>
          You have successfully verified your account.
        </p>
        
        <PrimaryButton styles={classes.btn} onClick={() => navigate(APP_ROUTES.DASHBOARD)}>Go to dashboard</PrimaryButton>
      </div>
    </div>
  );
};
