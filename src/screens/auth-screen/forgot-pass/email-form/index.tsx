import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '@components/ui/input';
import Button from '@components/ui/button';

import { appRoutes } from '@configs/routes.config';

import { classes } from './index.tailwind';

interface PropsType {
  onSubmit: () => void;
}

export const SendEmailForm: FC<PropsType> = ({ onSubmit }) => {
  const navigate = useNavigate();
  
  const handleSignUp = () => {
    navigate(appRoutes.auth.signUp);
  };

  const handleSendCode = () => {
    onSubmit();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Forgot Your Password?</h1>
    
      <form className={classes.form}>
        <Input label='Email' />
        <Button onClick={handleSendCode} styles={classes.codeBtn}>Send Code</Button>
      </form>
    
      <div className={classes.signUpContainer}>
        <p className={classes.signUpParagraph}>Don&rsquo;t have an Account? </p>
        <Button type="inherit" styles={classes.signUpBtn} onClick={handleSignUp}>SIGN UP</Button>
      </div>
    </div>
  );
};
