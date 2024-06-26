import ReactDOM from 'react-dom';
import { FC, PropsWithChildren, useEffect } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { useClickOutside } from '@hooks/useClickOutside';

interface PropsType extends PropsWithChildren {
  styles?: Partial<{ container: string; }>
  onClose: () => void;
}

const Modal: FC<PropsType> = ({ children, styles, onClose }) => {
  const ref = useClickOutside<HTMLDivElement>(onClose);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDOM.createPortal((
    <div className={classes.wrapper} onClick={() => {}}>
      <div ref={ref} className={cn(classes.container, styles?.container)}>
        {children}
      </div>
    </div>
  ), document.getElementById('modal')!);
};

export default Modal;
