import { ErrorSvg } from '@components/ui/svg';
import { classes } from './index.tailwind';

const ErrorIcon = () => (
  <div className={classes.container}>
    <ErrorSvg />
  </div>
);

export default ErrorIcon;