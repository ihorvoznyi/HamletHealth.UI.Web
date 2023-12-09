import { FC } from 'react';

import { WideCheckSvg } from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType {
  width?: number;
  height?: number;
  styles?: Partial<{ container: string; }>
}

export const SuccessCircleCheckIcon: FC<PropsType> = ({ width = 48, height = 48, styles }) => (
  <div className={cn(classes.container, styles?.container)}>
    <WideCheckSvg width={width} height={height} />
  </div>
);
