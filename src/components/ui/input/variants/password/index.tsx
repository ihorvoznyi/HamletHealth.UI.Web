import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { EyeSvg } from '@components/ui/svg';

import { Logger, TextHelper } from '@shared/lib/helpers';

import { FieldProps } from '@components/ui/input/index.interfaces';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType extends Pick<FieldProps, 'register'> {
  value: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: FC<PropsType> = ({ value, onChange, className, register, ...props }) => {
  const [hiddenValue, setHiddenValue] = useState(TextHelper.replaceWithDashes(value));
  const [isHidden, setIsHidden] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const combinedRefs = mergeRefs([register.ref, inputRef]);

  useEffect(() => {
    setHiddenValue(TextHelper.replaceWithDashes(value));
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    const diffLength = newValue.length - value.length;
    const cursorPosition = inputRef!.current?.selectionStart as number;
    const dif = cursorPosition - diffLength;

    if (diffLength > 0) {
      const addedChar = newValue.slice(dif, cursorPosition);
      event.target.value = value.slice(0, dif) + addedChar + value.slice(dif);
    } else if (diffLength < 0) {
      event.target.value = value.slice(0, cursorPosition) + value.slice(dif);
    } else {
      const idx = cursorPosition - 1;
      const modified = value.split('');
      modified[idx] = newValue[idx];

      event.target.value = modified.join('');
    }
    
    onChange(event);
  };

  const toggleVisibility = () => setIsHidden(prev => !prev);

  return (
    <>
      <input
        {...props}
        {...register}
        type="text"
        ref={combinedRefs}
        onChange={handleChange}
        className={cn(className, isHidden && 'tracking-[5px]')}
        value={isHidden ? hiddenValue : value}
        spellCheck={false}
      />
      <EyeSvg isShowLine={!isHidden} className={classes.icon} onClick={toggleVisibility} />
    </>
  );
};

function findFirstAndLastNonDashPositions(str: string) {
  let first = -1;
  let last = -1;

  // Find the first non-dash character
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
      first = i;
      break; // Stop the loop once the first non-dash character is found
    }
  }

  // Find the last non-dash character
  // Start from the end of the string
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== '-') {
      last = i;
      break; // Stop the loop once the last non-dash character is found
    }
  }

  // Return the positions
  // If no non-dash characters are found, both first and last will be -1
  return { first, last };
}

export default PasswordField;
