import React, { ChangeEvent } from 'react';

import { FieldProps } from '@components/ui/input/index.interfaces';

import { useInput } from '@components/ui/input/lib/hooks';

import { normalizeDate } from '@utils/normalization.util';

interface PropsType extends Pick<FieldProps, 'register'> {
  className?: string;
}

const DateField: React.FC<PropsType> = ({ register, ...props }) => {
  const inputState = useInput();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.target.value = normalizeDate(value);
    inputState.handleChangeEvent(event);
  };

  const displayPlaceholder = inputState.isFocus ? 'MM/DD/YYYY'  : '';

  return (
    <input 
      {...props}
      {...register}
      type="text" 
      value={inputState.value} 
      onChange={onChange} 
      placeholder={displayPlaceholder}
    />
  );
};

export default DateField;