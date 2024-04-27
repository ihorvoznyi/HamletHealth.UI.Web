import { classes } from './index.tailwind';

const Policy = () => {
  return (
    <p className={classes.paragraph}>
      By signing up I agree with
      {' '}
      <span className={classes.span}>Terms of Use</span>
      {' '}
      and
      {' '}
      <span className={classes.span}>Privacy Policy</span>.
    </p>
  );
};

export default Policy;