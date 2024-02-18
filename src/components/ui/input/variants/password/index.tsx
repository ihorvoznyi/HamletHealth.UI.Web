import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { EyeSvg } from '@components/ui/svg';

import { TextHelper } from '@shared/lib/helpers';

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