import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';

import { Input, Button } from '@components/ui/controls';
import { useLogin } from './lib/hooks';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, errors, control } = useLogin();
  
  const handleResetPass = () => {
    navigate(APP_ROUTES.FORGOT_PASS);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Email"
        styles={classes.input}
        register={register('email')}
        error={errors.email?.message}
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
            error={errors.password?.message}
          />
        )}
      />
      <div className={classes.btnsContainer}>
        <button type="submit" className={classes.loginBtn}>Login</button>
        <Button variant="inherit" onClick={handleResetPass} styles={classes.changePassBtn}>
          Forgot Password ?
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;