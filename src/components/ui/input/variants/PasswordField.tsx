import { mergeRefs } from 'react-merge-refs';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import { EyeSvg } from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from '../index.tailwind';

interface PropsType {
  value: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  register: Omit<UseFormRegisterReturn, 'onChange' | 'onBlur'>;
}

const hideValue = (value: string) => '-'.repeat(value.length);

const PasswordField: FC<PropsType> = ({ value, onChange, className, register, ...props }) => {
  const [hiddenValue, setHiddenValue] = useState(hideValue(value));
  const [isHidden, setIsHidden] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const combinedRefs = mergeRefs([register.ref, inputRef]);

  useEffect(() => {
    setHiddenValue(hideValue(value));
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const diffLength = newValue.length - value.length;
    const cursorPosition = inputRef!.current?.selectionStart as number;
    const dif = cursorPosition - diffLength;

    if (diffLength > 0) {
      const addedChar = newValue.slice(dif, cursorPosition);
      event.target.value = value.slice(0, dif) + addedChar + value.slice(dif);

      onChange(event);
    } else {
      event.target.value = value.slice(0, cursorPosition) + value.slice(dif);
      onChange(event);
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
        className={cn(className, isHidden && 'tracking-[5px]')}
        value={isHidden ? hiddenValue : value}
        onChange={handleChange}
        spellCheck={false}
      />
      <EyeSvg isShowLine={!isHidden} className={classes.icon} onClick={toggleVisibility} />
    </>
  );
};

export default PasswordField;
