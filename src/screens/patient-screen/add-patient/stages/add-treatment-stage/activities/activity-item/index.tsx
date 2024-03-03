import { FC } from 'react';

import PrimaryButton from '@components/ui/button';
import { PlusSvg } from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType {
  name: string;
  type: string;
}

const ListItem: FC<PropsType> = ({ name, type }) => {
  return (
    <li 
      key={name}
      className={classes.container}
    >
      <div className={classes.contentContainer}>
        <p className={classes.name}>{name}</p>
        <span className={cn(
            classes.type, 
            type === 'Activity' ? 'text-vivid-cerulean' : 'text-orange'
          )}
        >{type}</span>
      </div>

      <PrimaryButton styles={classes.btn} type="outlined" onClick={() => {}}>
        <PlusSvg className={classes.icon.width} color={classes.icon.color} />
        <span className={classes.btnText}>Add</span>
      </PrimaryButton>
    </li>
  );
};

export default ListItem;
