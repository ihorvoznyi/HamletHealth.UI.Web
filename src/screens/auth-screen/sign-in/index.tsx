import { useNavigate } from 'react-router-dom';

import { AuthLayout } from '../layout';
import Input from '@components/ui/input';
import Button from '@components/ui/button';

import { appRoutes } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SignIn = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate(appRoutes.dashboard);
  };
  const handleResetPass = () => {
    navigate(appRoutes.auth.forgotPass);
  };
  
  return (
    <AuthLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Login Your Account</h1>
        <form className={classes.form}>
          <Input label="Email" styles={classes.input} />
          <Input type="password" label="Password" styles={classes.input} />

          <div className={classes.btnsContainer}>
            <Button onClick={handleLogin} styles={classes.loginBtn}>Login</Button>
            <Button type="inherit" onClick={handleResetPass} styles={classes.changePassBtn}>
              Forgot Password ?
            </Button>
          </div>
        </form>

        <div className={classes.signUpContainer}>
          <p className={classes.signUpParagraph}>Don&rsquo;t have an Account? </p>
          <Button 
            type="inherit" 
            styles={classes.signUpBtn} 
            onClick={() => navigate(appRoutes.auth.signUp)}>SIGN UP</Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
