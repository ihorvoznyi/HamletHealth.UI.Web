import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { EyeSvg } from '@components/ui/svg';

import { useInput } from '../../lib/hooks';

import { TextHelper } from '@shared/lib/helpers';

import { FieldProps } from '@components/ui/input/index.interfaces';

import { classes } from './index.tailwind';

interface PropsType extends Pick<FieldProps, 'register'> {
  className?: string;
}

const PasswordField: FC<PropsType> = ({ className, register, ...props }) => {
  const { value, isFocus, handleChangeEvent } = useInput();

  const [isHidden, setIsHidden] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const combinedRefs = mergeRefs([register.ref, inputRef]);

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus();
    }
  }, [isFocus]);

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
    
    handleChangeEvent(event);
  };

  const toggleVisibility = () => setIsHidden(prev => !prev);
  
  const displayValue = isHidden ? TextHelper.replaceWithDashes(value) : value;
  const inputClassName = `${className} ${isHidden ? 'tracking-[5px]' : ''}`;

  return (
    <>
      <input
        {...props}
        {...register}
        ref={combinedRefs}
        type="text"
        className={inputClassName}
        value={displayValue}
        onChange={handleChange}
        spellCheck={false}
      />
      <EyeSvg isShowLine={!isHidden} className={classes.icon} onClick={toggleVisibility} />
    </>
  );
};

export default PasswordField;
