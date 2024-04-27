import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { EyeSvg } from '@components/ui/svg';

import { useInput } from '../../lib/hooks';

import { FieldProps } from '@components/ui/controls/input/index.interfaces';

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

  const toggleVisibility = () => setIsHidden(prev => !prev);
  
  const inputClassName = `${className} ${isHidden ? 'tracking-[5px]' : ''}`;

  return (
    <>
      <input
        {...props}
        {...register}
        ref={combinedRefs}
        type={isHidden ? 'password' : 'text'}
        className={inputClassName}
        value={value}
        onChange={handleChangeEvent}
        spellCheck={false}
      />
      <EyeSvg isShowLine={!isHidden} className={classes.icon} onClick={toggleVisibility} />
    </>
  );
};

export default PasswordField;
