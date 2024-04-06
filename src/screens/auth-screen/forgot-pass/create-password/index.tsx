import { Input } from '@components/ui';
import PrimaryButton from '@components/ui/button';

import { classes } from './index.tailwind';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@configs/routes.config';
import { useForm } from 'react-hook-form';

export const CreatePasswordForm = () => {
  const { register } = useForm();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(APP_ROUTES.DASHBOARD);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create New Password</h1>
      <p className={classes.subtitle}>Enter new password</p>

      <form className={classes.form}>
        <Input register={register('')} label="New Password" />
        <Input register={register('')} label="Confrm New Password" />
      </form>

      <PrimaryButton onClick={handleSubmit} styles={classes.submitBtn}>Submit</PrimaryButton>
    </div>
  );
};
