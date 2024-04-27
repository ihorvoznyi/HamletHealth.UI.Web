import { useNavigate } from 'react-router-dom';

import { Policy } from '@components/ui/common';
import { Button } from '@components/ui/controls';
import { AuthLayout } from '@components/layout';
import { CreateAccountForm } from '@components/features/forms';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SignUpPage = () => {
  const navigate = useNavigate();

  const redirectToSignIn = () => navigate(APP_ROUTES.SIGN_IN);

  return (
    <AuthLayout>
      <div className={classes.container}>
        <div className={classes.formWrapper}>
          <h1 className={classes.title}>Create account</h1>
          <CreateAccountForm />
          <Policy />
        </div>

        <div className={classes.signInContainer}>
          <p className={classes.signInParagraph}>Already have an account?</p>
          <Button 
            variant="inherit" 
            styles={classes.signInBtn} 
            onClick={redirectToSignIn}>SIGN IN</Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
