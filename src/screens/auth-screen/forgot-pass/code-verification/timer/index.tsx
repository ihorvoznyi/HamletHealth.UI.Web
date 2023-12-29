import { FC, useEffect, useState } from 'react';

import { classes } from './index.tailwind';

interface PropsType {
  callback: () => void;
}

export const Timer: FC<PropsType> = ({ callback }) => {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft - 1 > 0) {
        setSecondsLeft(prev => prev - 1);
        return;
      }

      callback();
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);
  return (
    <div className={classes.container}>Resend 0:{secondsLeft}s</div>
  );
};
