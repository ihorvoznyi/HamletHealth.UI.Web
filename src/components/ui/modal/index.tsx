import ReactDOM from "react-dom";
import { FC, PropsWithChildren } from "react";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return ReactDOM.createPortal((
    <div className="bg-black/[0.2] absolute inset-0 z-[9999] flex items-center justify-center" onClick={() => {}}>
      <div className="bg-white w-[600px] p-[30px] rounded-[8px]">
        {children}
      </div>
    </div>
  ), document.getElementById('modal')!);
};

export default Modal;
