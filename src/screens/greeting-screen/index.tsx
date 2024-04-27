import { useNavigate } from 'react-router-dom';

import PrimaryButton from '@components/ui/controls/button';

import { APP_ROUTES } from '@configs/routes.config';

import { classes } from './index.tailwind';

const GreetingScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(APP_ROUTES.SIGN_UP);
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

        <PrimaryButton styles={classes.btn} onClick={handleClick}>Start Testing</PrimaryButton>
      </main>
    </div>
  );
};

export default GreetingScreen;
