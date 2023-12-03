import Button from '@components/ui/button';
import { classes } from './index.tailwind';

const Counter = () => {
  return (
    <div className={classes.conainer}>
      <p className={classes.paragraph}>Frequency</p>

      <div className={classes.counterContainer}>
        <Button styles={classes.btn} onClick={() => {}}>-</Button>
        <div className={classes.inputContainer}>
          <input className={classes.input} />
        </div>
        <Button styles={classes.btn} onClick={() => {}}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
