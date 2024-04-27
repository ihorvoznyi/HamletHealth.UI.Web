import { useNavigate } from 'react-router-dom';

import { Button } from '@components/ui/controls';
import { AuthLayout } from '@components/layout';
import { LoginForm } from '@components/features/forms';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SignInPage = () => {
  const navigate = useNavigate();

  const redirectToSignUp = () => navigate(APP_ROUTES.SIGN_UP);
  
  return (
    <AuthLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Login Your Account</h1>

        <LoginForm />

        <div className={classes.signUpContainer}>
          <p className={classes.signUpParagraph}>Don&rsquo;t have an Account? </p>
          <Button
            variant="inherit"
            styles={classes.signUpBtn}
            onClick={redirectToSignUp}>SIGN UP</Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
