import { useNavigate } from 'react-router-dom';

import { Policy } from '@screens/auth-screen/shared/ui';
import { AuthScreenLayout } from '@screens/auth-screen/shared/layout';
import PrimaryButton from '@components/ui/button';
import CreateAccountForm from './create-account-form';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const SignUp = () => {
  const navigate = useNavigate();

  const redirectToSignIn = () => navigate(APP_ROUTES.SIGN_IN);

  return (
    <AuthScreenLayout>
      <div className={classes.container}>
        <div className={classes.formWrapper}>
          <h1 className={classes.title}>Create account</h1>
          <CreateAccountForm />
          <Policy />
        </div>

        <div className={classes.signInContainer}>
          <p className={classes.signInParagraph}>Already have an account?</p>
          <PrimaryButton 
            type="inherit" 
            styles={classes.signInBtn} 
            onClick={redirectToSignIn}>SIGN IN</PrimaryButton>
        </div>
      </div>
    </AuthScreenLayout>
  );
};

export default SignUp;
