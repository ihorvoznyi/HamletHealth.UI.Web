import { LogoSvg } from '@components/ui/icons';
import { classes } from './index.tailwind';

export const Logotype = () => {
  return (
    <div className={classes.container}>
      <LogoSvg />
      Hamlet Health
    </div>
  );
};
