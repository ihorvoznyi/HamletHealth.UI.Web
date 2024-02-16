import { useNavigate } from 'react-router-dom';

import { AuthScreenLayout } from '../shared/layout';
import { Policy } from '../shared/ui';
import LoginForm from './login-form';
import Button from '@components/ui/button';

import { appRoutes } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SignIn = () => {
  const navigate = useNavigate();

  const redirectToSignUp = () => navigate(appRoutes.auth.signUp);
  
  return (
    <AuthScreenLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Login Your Account</h1>

        <LoginForm />

        <div className={classes.signUpContainer}>
          <p className={classes.signUpParagraph}>Don&rsquo;t have an Account? </p>
          <Button
            type="inherit"
            styles={classes.signUpBtn}
            onClick={redirectToSignUp}>SIGN UP</Button>
        </div>
      </div>
    </AuthScreenLayout>
  );
};

export default SignIn;
