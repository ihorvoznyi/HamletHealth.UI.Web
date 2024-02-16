import { ChangeEvent, FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import FieldVariant from './variants';
import { CheckSvg } from '../svg';

import { useClickOutside } from '@hooks/useClickOutside';

import { cn } from '@utils/style.util';

import { InputTypes } from './index.interfaces';

import { classes } from './index.tailwind';

type WrapperClasses = {
  container: string;
  label: string;
}

interface PropsType {
  type?: InputTypes;
  label?: string;
  styles?: Partial<WrapperClasses>;
  register: UseFormRegisterReturn;
}

const Input: FC<PropsType> = ({ type = 'text', label, styles, register }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const ref = useClickOutside<HTMLDivElement>(() => setIsFocused(false));
  const isLabelActive = !!value || isFocused;
  const showCheckIcon = false && !isFocused;

  const handleFocus = () => setIsFocused(false);
  
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    register.onBlur(e);
    setIsFocused(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    register.onChange(event);
    setValue(event.target.value);
  };

  return (
    <div 
      ref={ref} 
      onClick={() => setIsFocused(true)} 
      className={cn(
          classes.container,
          'relative',
          isFocused && 'border-han-blue',
          styles?.container
        )}
    >
    {label && (
      <label
        className={cn(
          classes.label.base,
          isLabelActive ? classes.label.active : classes.label.inactive,
          !isFocused && classes.label.unfocused,
          styles?.label)}
      >
        {label}
      </label>
    )}
      <FieldVariant
        register={register}
        className={classes.input}
        type={type}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {showCheckIcon ? <CheckSvg className={classes.icon} /> : null}
    </div>
  );
};

export default Input;
