import Input from '@components/ui/input';
import PrimaryButton from '@components/ui/button';

import { classes } from './index.tailwind';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@configs/routes.config';

export const CreatePasswordForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(APP_ROUTES.DASHBOARD);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create New Password</h1>
      <p className={classes.subtitle}>Enter new password</p>

      <form className={classes.form}>
        <Input register={null!} label="New Password" />
        <Input register={null!} label="Confrm New Password" />
      </form>

      <PrimaryButton onClick={handleSubmit} styles={classes.submitBtn}>Submit</PrimaryButton>
    </div>
  );
};
