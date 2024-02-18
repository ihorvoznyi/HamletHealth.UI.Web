import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';

import Input from '@components/ui/input';
import Button from '@components/ui/button';

import { appRoutes } from '@configs/routes.config';

import { useLogin } from './lib/hooks';

import { classes } from './index.tailwind';

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, errors, control } = useLogin();
  
  const handleResetPass = () => {
    navigate(appRoutes.auth.forgotPass);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Email"
        styles={classes.input}
        register={register('email')}
      />
      <Controller 
        name="password"
        control={control}
        render={() => (
          <Input
            type="password"
            label="Password"
            styles={classes.input}
            register={register('password')}
          />
        )}
      />
      <div className={classes.btnsContainer}>
        {errors['password']?.message ?? ''}
        <button type="submit" className={classes.loginBtn}>Login</button>
        <Button type="inherit" onClick={handleResetPass} styles={classes.changePassBtn}>
          Forgot Password ?
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;