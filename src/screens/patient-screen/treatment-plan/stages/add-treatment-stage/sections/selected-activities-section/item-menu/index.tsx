import { FC } from 'react';

import PrimaryButton from '@components/ui/button';

import { classes } from './index.tailwind';
import { DeleteSvg, ClockSvg, EditSvg } from '@components/ui/svg';

interface PropsType {
  onDelete: () => void;
  onDefine: () => void;
  onEdit: () => void;
}

const Menu: FC<PropsType> = ({ onDefine, onDelete, onEdit }) => (
  <div className={classes.container}>
    <PrimaryButton 
      type="outlined"
      styles={classes.btn}
      onClick={onDelete}
    >
      <p className={classes.deleteBtnContent}>
        <DeleteSvg />
        Delete
      </p>
    </PrimaryButton>

    <PrimaryButton 
      type="outlined"
      styles={classes.btn}
      onClick={onDefine}
    >
      <p className={classes.defineBtnContent}>
        <ClockSvg />
        Define as a goal
      </p>
    </PrimaryButton>

    <PrimaryButton 
      type="outlined"
      styles={classes.btn}
      onClick={onEdit}
    >
      <p className={classes.editBtnContent}>
        <EditSvg />
        Rename
      </p>
    </PrimaryButton>
  </div>
);

export default Menu;