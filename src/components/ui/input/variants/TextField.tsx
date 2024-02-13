import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldProps } from '../index.interfaces';

interface PropsType extends Omit<FieldProps, 'register'> {
  register: Omit<UseFormRegisterReturn, 'onChange' | 'onBlur'>;
}

const TextField: FC<PropsType> = ({ register, ...props }) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  // useHandleImperative(ref, inputRef);

  return <input {...register} {...props} />;
};

TextField.displayName = 'TextField';

export default TextField;
