import { FC } from 'react';

import { cn } from '@utils/style.util';
import { retrieveInitials } from '@utils/text.util';
import { classes } from './index.tailwind';

interface PropsType {
  fullname: string;
  className?: string;
}

const Avatar: FC<PropsType> = ({ fullname, className }) => {
  return <div className={cn(classes.container, className)}>{retrieveInitials(fullname)}</div>;
};

export default Avatar;
