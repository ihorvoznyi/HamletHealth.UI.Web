import Button from '@components/ui/button';
import Input from '@components/ui/input';

import { classes } from './index.tailwind';
import { useNavigate } from 'react-router-dom';

const CreateAccountForm = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <h1 className={classes.title}>Create account</h1>

        <form className={classes.form}>
          <Input label="First name" />
          <Input label="Last name" />
          <Input label="National Provided Identifier" />
          <Input label="Your speciality" />
          <Input styles={classes.gridWideInput} label="Email" />
          <Input type="password" label="Create password" />
          <Input type="password" label="Confirm password" />
        </form>

        <Button styles={classes.createBtn} onClick={() => navigate('/verify')}>
          Create Account
        </Button>

        <p className={classes.policyParagraph}>
          By signing up I agree with
          {' '}
          <span className={classes.policySpan}>Terms of Use</span>
          {' '}
          and
          {' '}
          <span className={classes.policySpan}>Privacy Policy</span>.
        </p>
      </div>
      
      <div className={classes.signInContainer}>
        <p className={classes.signInParagraph}>Already have an account?</p>
        <Button 
          type="inherit" 
          styles={classes.signInBtn} 
          onClick={() => {}}>SIGN IN</Button>
      </div>
    </div>
  );
};

export default CreateAccountForm;