import { ChangeEvent, FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Wrapper from './wrapper';
import FieldVariant from './variants';

import { WrapperProps } from './wrapper/index';
import { InputTypes } from './index.interfaces';

import { classes } from './index.tailwind';

interface PropsType extends Pick<WrapperProps, 'label' | 'styles'> {
  type?: InputTypes;
  error?: string;
  register: UseFormRegisterReturn;
}

const Input: FC<PropsType> = ({ type = 'text', label, styles, register, error }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    register.onChange(event);
    setValue(event.target.value);
  };

  return (
    <Wrapper
      label={label}
      showIcon={type !== 'password'}
      isFilled={!!value}
      isValid={!!value}
      error={error}
      styles={styles}
    >
      <FieldVariant
        register={register}
        className={classes.input}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Input;
