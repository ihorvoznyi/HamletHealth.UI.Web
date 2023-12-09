import { FC } from 'react';

import Button from '@components/ui/button';

import { classes } from './index.tailwind';
import { DeleteSvg, ClockSvg, EditSvg } from '@components/ui/svg';

interface PropsType {
  onDelete: () => void;
  onDefine: () => void;
  onEdit: () => void;
}

const Menu: FC<PropsType> = ({ onDefine, onDelete, onEdit }) => (
  <div className={classes.container}>
    <Button 
      type="outlined"
      styles={classes.btn}
      onClick={onDelete}
    >
      <p className={classes.deleteBtnContent}>
        <DeleteSvg />
        Delete
      </p>
    </Button>

    <Button 
      type="outlined"
      styles={classes.btn}
      onClick={onDefine}
    >
      <p className={classes.defineBtnContent}>
        <ClockSvg />
        Define as a goal
      </p>
    </Button>

    <Button 
      type="outlined"
      styles={classes.btn}
      onClick={onEdit}
    >
      <p className={classes.editBtnContent}>
        <EditSvg />
        Rename
      </p>
    </Button>
  </div>
);

export default Menu;