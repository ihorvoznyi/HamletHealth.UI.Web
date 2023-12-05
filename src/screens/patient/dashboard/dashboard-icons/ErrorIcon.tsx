import ErrorSvg from '@components/ui/icons/ErrorSvg';
import { classes } from './index.tailwind';

export const ErrorIcon = () => (
  <div className={classes.errorIcon}>
    <ErrorSvg />
  </div>
);
