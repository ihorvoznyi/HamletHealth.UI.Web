import { FC, useRef, useState } from "react"

import { cn } from "@utils/style.util";
import { CheckIcon } from "@ui/icons";

import { InputProps, InputClasses } from "./index.interfaces"
import { containerStyle, inputStyle, labelFocusStyle, labelUnfocusedStyle, inActiveTextStyle, labelStyle, iconStyle } from "./index.tailwind";

const Input: FC<InputProps> = ({ label, isValid }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // TODO: provide better naming
  const isLabelActive = !!(isFocused || inputRef.current?.value);
  
  const classes: InputClasses = {
    container: cn(
      containerStyle,
      isFocused && 'border-han-blue'),
    label: cn(
      labelStyle,
      {
        [labelFocusStyle]: isLabelActive,
        [labelUnfocusedStyle]: !isLabelActive,
        [inActiveTextStyle]: isLabelActive && !isFocused
      }),
    input: cn(inputStyle),
    icon: cn(iconStyle),
  };

  return (
    <div className={classes.container}>
      {label && (
        <label
          className={classes.label}
          onClick={() => inputRef.current?.focus()}>{label}</label>
      )}
      <input
        ref={inputRef}
        className={classes.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isValid && !isFocused && <CheckIcon className={classes.icon} />}
    </div>
  );
}

export default Input;