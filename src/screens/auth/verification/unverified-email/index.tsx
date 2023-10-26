import FlowerIcon from '@components/ui/icons/Flower';

import { classes as commonClasses } from '../index.tailwind';
import { classes } from './index.tailwind';
import { FC } from 'react';

interface PropsType {
  callback: () => void;
}

export const Unverified: FC<PropsType> = ({ callback }) => {
  const handleResend = () => {
    // Mock implementation
    // to switch between verification components
    callback();
  };

  return (
    <div className={commonClasses.container}>
      <FlowerIcon />

      <div className={classes.contentContainer}>
        <h1 className={commonClasses.title}>Verify your email address</h1>
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
