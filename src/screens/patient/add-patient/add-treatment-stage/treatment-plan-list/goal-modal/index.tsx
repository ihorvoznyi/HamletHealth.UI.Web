import Head from './head';
import Counter from './counter';
import Duration from './duration';
import WeekDays from './week-days';
import Description from './description';
import Modal from '@components/ui/modal';
import Button from '@components/ui/button';

import { classes } from './index.tailwind';

const GoalModal = () => {
  return (
    <Modal>
      <Head />
      
      <div className={classes.contentContainer}>
        <Counter />
        <Duration />
        <WeekDays />
        <Description />

        <div className={classes.btnsContainer}>
          <Button type="outlined" styles={classes.cancelBtn} onClick={() => {}}>Cancel</Button>
          <Button styles={classes.saveBtn} onClick={() => {}}>Save Goal</Button>
        </div>
      </div>
    </Modal>
  );
};

export default GoalModal;
