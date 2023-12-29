import Input from '@components/ui/input';
import Button from '@components/ui/button';

import { classes } from './index.tailwind';

export const CreatePasswordForm = () => {
  const handleSubmit = () => {};

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Creat New Password</h1>
      <p className={classes.subtitle}>Enter new password</p>

      <form className={classes.form}>
        <Input label="New Password" />
        <Input label="Confrm New Password" />
      </form>

      <Button onClick={handleSubmit} styles={classes.submitBtn}>Submit</Button>
    </div>
  );
};
