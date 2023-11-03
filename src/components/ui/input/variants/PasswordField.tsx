import { ChangeEvent, forwardRef, useRef, useState } from 'react';

import { cn } from '@utils/style.util';
import { EyeSvg } from '@components/ui/icons';

import { classes } from '../index.tailwind';
import { CustomInputRef, FieldProps } from '../index.interfaces';
import { hidePassword } from './lib/input.helpers';
import { useHandleImperative } from './lib/useHandleImperative';

const PasswordField = forwardRef<CustomInputRef, FieldProps>(({ className, onChange, ...props }, ref) => {
  const [isHidden, setIsHidden] = useState(true);
  const [actualValue, setActualValue] = useState<string>('');
  const hiddenValue = hidePassword(actualValue);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useHandleImperative(ref, inputRef);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const diffLength = newValue.length - actualValue.length;
    const cursorPosition = inputRef!.current?.selectionStart as number;
    const dif = cursorPosition - diffLength;

    if (diffLength > 0) {
      const addedChar = newValue.slice(dif, cursorPosition);

      setActualValue(actualValue.slice(0, dif) + addedChar + actualValue.slice(dif));
    } else {
      setActualValue(actualValue.slice(0, cursorPosition) + actualValue.slice(dif));
    }

    onChange(e);
  };
  
  return (
    <>
      <input
        {...props}
        type="text"
        ref={inputRef}
        className={cn(
          className,
          'text-body-medium',
          isHidden && 'tracking-[2.8px]'
        )}
        value={isHidden ? hiddenValue : actualValue}
        onChange={handleChange}
      />

      <EyeSvg isShowLine={isHidden} className={classes.icon} onClick={() => setIsHidden(prev => !prev)} />
    </>
  );
});

PasswordField.displayName = 'PasswordField';

export default PasswordField;