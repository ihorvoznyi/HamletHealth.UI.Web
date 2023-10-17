import { FC, MouseEvent } from "react";

import { cn } from "@utils/style.util";

import { styleMapper } from "./lib";
import { ButtonProps } from "./index.interfaces";
import { btnContainerStyle, btnContentStyle } from "./index.tailwind";

const Button: FC<ButtonProps> = ({ type = 'primary', children, styles, onClick }) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  const classNames = {
    content: cn(btnContentStyle, styles?.content),
    container: cn(
      btnContainerStyle,
      styleMapper(type),
      styles?.container)
  };

  return (
    <button className={classNames.container} onClick={handleClick}>
      <div className={classNames.content}>{children}</div>
    </button>
  );
}

export default Button;
