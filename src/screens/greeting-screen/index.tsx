import { useNavigate } from 'react-router-dom';

import Button from '@ui/button';
import { classes } from './index.tailwind';
import { appRoutes } from '@configs/routes.config';

const GreetingScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(appRoutes.auth.signUp);
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        WEB APP PROTOTYPES
      </header>

      <main className={classes.main}>
        <h1 className={classes.title}>
          Test a Hamlett Health provider&rsquo;s web app
        </h1>

        <div className={classes.listWrapper}>
          The goals are:
          <ul className={classes.list}>
            <li>To create a provider&rsquo;s account</li>
            <li>To add a new patient (Amanda Hug)</li>
            <li>To add 4 activities to her daily routine</li>
            <li>To track her progress</li>
          </ul>
          To fill in inputs and dropdowns, click on it.
        </div>

        <Button styles={classes.btn} onClick={handleClick}>Start Testing</Button>
      </main>
    </div>
  );
};

export default GreetingScreen;
