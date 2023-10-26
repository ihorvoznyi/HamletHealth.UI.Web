import { Logo } from '@components/ui/icons';
import { classes } from './index.tailwind';

export const Logotype = () => {
  return (
    <div className={classes.container}>
      <Logo />
      Hamlet Health
    </div>
  );
};
