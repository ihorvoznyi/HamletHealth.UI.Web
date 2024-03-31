import { FC } from 'react';

import Head from './head';
import Counter from './counter';
import Duration from './duration';
import WeekDays from './week-days';
import Description from './description';
import Modal from '@components/ui/modal';
import { Button } from '@components/ui';

import { classes } from './index.tailwind';

interface PropsType {
  onClose: () => void;
}

const GoalModal: FC<PropsType> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Head />
      
      <div className={classes.contentContainer}>
        <Counter />
        <Duration />
        <WeekDays />
        <Description />

        <div className={classes.btnsContainer}>
          <Button variant="outlined" styles={classes.cancelBtn} onClick={() => onClose()}>Cancel</Button>
          <Button styles={classes.saveBtn} onClick={() => {}}>Save Goal</Button>
        </div>
      </div>
    </Modal>
  );
};

export default GoalModal;
