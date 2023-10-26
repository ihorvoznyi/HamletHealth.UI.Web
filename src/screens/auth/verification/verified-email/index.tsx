import Button from '@components/ui/button';
import FlowerIcon from '@components/ui/icons/Flower';

import { classes } from './index.tailwind';
import { classes as commonClasses } from '../index.tailwind';
import { useNavigate } from 'react-router-dom';

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
        
        <Button styles={classes.btn} onClick={() => navigate('/home')}>Go to dashboard</Button>
      </div>
    </div>
  );
};
