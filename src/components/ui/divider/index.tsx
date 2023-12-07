import { FC } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const Divider: FC<PropsType> = ({ direction = 'horizontal', className }) => {
  return <div className={cn(classes.divider[direction], className)} />;
};

export default Divider;