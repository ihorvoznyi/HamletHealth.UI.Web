import { ChangeEvent, FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import FieldVariant from './variants';
import InputWrapper, { WrapperClasses } from './wrapper';

import { InputTypes } from './index.interfaces';

import { classes } from './index.tailwind';

interface PropsType {
  type?: InputTypes;
  label?: string;
  styles?: Partial<WrapperClasses>;
  register: UseFormRegisterReturn;
}

const Input: FC<PropsType> = ({ type = 'text', label, styles, register }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    register.onBlur(e);
    setIsFocused(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    register.onChange(event);
    setValue(event.target.value);
  };

  return (
    <InputWrapper onFocus={handleFocus} label={label} isInputValid={false} isFocused={isFocused} styles={styles}>
      <FieldVariant
        register={register}
        className={classes.input}
        type={type}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default Input;
