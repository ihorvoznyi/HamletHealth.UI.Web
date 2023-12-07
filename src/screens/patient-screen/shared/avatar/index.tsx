import { FC } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { retrieveInitials } from '../patient.helpers';

interface PropsType {
  fullname: string;
  className?: string;
}

const Avatar: FC<PropsType> = ({ fullname, className }) => {
  return <div className={cn(classes.container, className)}>{retrieveInitials(fullname)}</div>;
};

export default Avatar;
