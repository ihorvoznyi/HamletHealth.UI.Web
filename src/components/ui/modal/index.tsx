import ReactDOM from 'react-dom';
import { FC, PropsWithChildren } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType extends PropsWithChildren {
  styles?: Partial<{ container: string; }>
}

const Modal: FC<PropsType> = ({ children, styles }) => {
  return ReactDOM.createPortal((
    <div className={classes.wrapper} onClick={() => {}}>
      <div className={cn(classes.container, styles?.container)}>
        {children}
      </div>
    </div>
  ), document.getElementById('modal')!);
};

export default Modal;
