import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Input, Button } from '@components/ui/controls';

import { APP_ROUTES } from '@configs/routes.config';
import { classes } from './index.tailwind';

const CreatePasswordForm = () => {
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

      <Button onClick={handleSubmit} styles={classes.submitBtn}>Submit</Button>
    </div>
  );
};

export default CreatePasswordForm;
