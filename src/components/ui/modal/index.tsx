import ReactDOM from 'react-dom';
import { FC, PropsWithChildren } from 'react';
import { classes } from './index.tailwind';

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return ReactDOM.createPortal((
    <div className={classes.container} onClick={() => {}}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  ), document.getElementById('modal')!);
};

export default Modal;
