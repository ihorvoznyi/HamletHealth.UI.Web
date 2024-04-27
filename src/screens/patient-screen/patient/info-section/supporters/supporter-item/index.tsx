import { FC } from 'react';

import Avatar from '@components/ui/common/avatar';

import { classes } from './index.tailwind';

interface PropsType {
  fullname: string;
  text: string; // TODO: Rename
}

const SupporterItem: FC<PropsType> = ({ fullname, text }) => (
  <div className={classes.container}>
    <Avatar fullname={fullname} className={classes.avatar} />
    <div className={classes.nameContainer}>
      <p className={classes.name}>{fullname}</p>
      <p className={classes.paragraph}>{text}</p>
    </div>
  </div>
);

export default SupporterItem;