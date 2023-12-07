import CreateAccountForm from './create-account-form';
import { classes } from './index.tailwind';

const SignUp = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img src="assets/auth-girl.png" alt="girl" className={classes.img} />
        
        <div className={classes.contentContainer}>
          <h1 className={classes.title}>
            Smart solution to take care of your patients
          </h1>
          <p className={classes.paragraph}>
            Track your patient&rsquo;s moods and 
            <br /> 
            activities and help them be mindful.
          </p>
        </div>
      </div>
      
      <CreateAccountForm />
    </div>
  );
};

export default SignUp;
