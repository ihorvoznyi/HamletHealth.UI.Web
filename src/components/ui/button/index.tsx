import { FC, MouseEvent } from 'react';

import { cn } from '@utils/style.util';

import { styleMapper } from './lib';
import { ButtonProps } from './index.interfaces';
import { classes } from './index.tailwind';

const Button: FC<ButtonProps> = ({ type = 'primary', children, styles, onClick }) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  return (
    <button 
      className={cn(
        classes.container,
        styleMapper(type),
        styles?.container
      )}
      onClick={handleClick}>{children}</button>
  );
};

export default Button;
