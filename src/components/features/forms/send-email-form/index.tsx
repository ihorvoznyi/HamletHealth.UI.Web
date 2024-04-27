import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input, Button } from '@components/ui/controls';

import { APP_ROUTES } from '@configs/routes.config';

import { SendEmailFormType, options } from './schema';

import { classes } from './index.tailwind';

interface PropsType {
  onSubmit: () => void;
}

const SendEmailForm: FC<PropsType> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SendEmailFormType>(options);

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(APP_ROUTES.SIGN_UP);
  };

  const handleSendCode = () => {
    onSubmit();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Forgot Your Password?</h1>
    
      <form className={classes.form} onSubmit={handleSubmit(handleSendCode)}>
        <Input 
          label='Email' 
          register={register('email')} 
          error={errors.email?.message} 
        />
        <button type="submit" className={classes.codeBtn}>Send Code</button>
      </form>
    
      <div className={classes.signUpContainer}>
        <p className={classes.signUpParagraph}>Don&rsquo;t have an Account? </p>
        <Button 
          variant="inherit" 
          styles={classes.signUpBtn} 
          onClick={handleSignUp}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default SendEmailForm;