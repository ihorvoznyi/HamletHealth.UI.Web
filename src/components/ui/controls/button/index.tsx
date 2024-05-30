import { FC, MouseEvent } from 'react';

import { styleMapper } from './lib';

import { ButtonProps } from './index.interfaces';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const Button: FC<ButtonProps> = ({ variant = 'primary', children, styles, onClick, ...props }) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={cn(classes.container, styleMapper(variant), styles?.container)} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
