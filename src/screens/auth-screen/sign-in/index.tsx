import { useNavigate } from 'react-router-dom';

import { AuthScreenLayout } from '../shared/layout';
import LoginForm from './login-form';
import PrimaryButton from '@components/ui/button';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SignIn = () => {
  const navigate = useNavigate();

  const redirectToSignUp = () => navigate(APP_ROUTES.SIGN_UP);
  
  return (
    <AuthScreenLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Login Your Account</h1>

        <LoginForm />

        <div className={classes.signUpContainer}>
          <p className={classes.signUpParagraph}>Don&rsquo;t have an Account? </p>
          <PrimaryButton
            type="inherit"
            styles={classes.signUpBtn}
            onClick={redirectToSignUp}>SIGN UP</PrimaryButton>
        </div>
      </div>
    </AuthScreenLayout>
  );
};

export default SignIn;
