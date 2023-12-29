import { useNavigate } from 'react-router-dom';

import Input from '@components/ui/input';
import Button from '@components/ui/button';
import Select from '@components/ui/select';

import { appRoutes } from '@configs/routes.config';

import { classes } from './index.tailwind';

const CreateAccountForm = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate(appRoutes.auth.signIn);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <h1 className={classes.title}>Create account</h1>

        <form className={classes.form}>
          <Input label="First name" />
          <Input label="Last name" />
          <Input label="National Provided Identifier" />
          <Select label="Your speciality" options={options} />
          <Input styles={classes.gridWideInput} label="Email" />
          <Input type="password" label="Create password" />
          <Input type="password" label="Confirm password" />
        </form>

        <Button styles={classes.createBtn} onClick={() => navigate(appRoutes.auth.verify)}>
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
          onClick={handleSignIn}>SIGN IN</Button>
      </div>
    </div>
  );
};

const options = [
  {
    label: 'Clinical Psychologist',
    value: 'clinical-psychologist'
  },
  {
    label: 'Health Psychologist',
    value: 'health-psychologist'
  },
  {
    label: 'Neuropsychologist',
    value: 'neuropsychologist',
  }
];

export default CreateAccountForm;