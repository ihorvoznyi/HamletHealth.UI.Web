import React from 'react';
import { FlowerSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';

interface PropsType {
  callback: () => void;
}

export const UnverifiedEmail: React.FC<PropsType> = ({ callback }) => {
  const handleResend = () => {
    // Mock implementation
    // to switch between verification components
    callback();
  };

  return (
    <div className={classes.container}>
      <FlowerSvg />

      <div className={classes.content}>
        <h1 className={classes.title}>Verify your email address</h1>
        <p className={classes.thankParagraph}>
          Thanks for joining Hamlet Heath! 
          {' '}
          We&rsquo;ll send a verification link to your email. Click on it and get to get started!
        </p>
        <p className={classes.emailParagraph}>
          Don&rsquo;t see the email?
          {' '}
          Click <a className={classes.link} onClick={handleResend}>here</a> to resend it.
        </p>
      </div>
    </div>
  );
};

export default UnverifiedEmail;