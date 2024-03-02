import React from 'react';

import { cn } from '@utils/style.util';

import './index.css';
import { classes } from './index.tailwind';

interface PropsType {
  styles: Partial<{ loader: string; }>
}

export const Loader: React.FC<PropsType> = ({ styles }) => (
  <div className={cn(classes.loader, styles?.loader)}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
