import Input from '@components/ui/input';
import Button from '@components/ui/button';

import { classes } from './index.tailwind';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@configs/routes.config';

export const CreatePasswordForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(appRoutes.dashboard);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create New Password</h1>
      <p className={classes.subtitle}>Enter new password</p>

      <form className={classes.form}>
        <Input register={null!} label="New Password" />
        <Input register={null!} label="Confrm New Password" />
      </form>

      <Button onClick={handleSubmit} styles={classes.submitBtn}>Submit</Button>
    </div>
  );
};
