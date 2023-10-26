import { ChangeEvent, FC, useRef, useState } from 'react';

import { cn } from '@utils/style.util';

import FieldVariant from './variants';
import { CheckIcon } from '@ui/icons';
import { CustomInputRef, InputProps } from './index.interfaces';

import { 
  classes, 
  labelActiveStyle, 
  labelInactiveStyle, 
  labelUnfocusedStyle 
} from './index.tailwind';

const Input: FC<InputProps> = ({ type = 'text', label, styles }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<CustomInputRef>(null);
  const [isFocused, setIsFocused] = useState(false);

  const isLabelActive = isFocused || !!value.length;
  const isInputValid = false && !isFocused;

  return (
    <div className={cn(
      classes.container, 
      isFocused && 'border-han-blue', 
      styles?.container)}
    >
      {label && (
        <label
          className={cn(classes.label, {
            [labelActiveStyle]: isLabelActive,
            [labelInactiveStyle]: !isLabelActive,
            [labelUnfocusedStyle]: !isFocused,
          })}
          onClick={() => inputRef.current?.focus()}>{label}</label>
      )}
      <FieldVariant
        ref={inputRef}
        type={type}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        className={classes.input}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      {isInputValid && !isFocused && <CheckIcon className={classes.icon} />}
    </div>
  );
};

export default Input;
