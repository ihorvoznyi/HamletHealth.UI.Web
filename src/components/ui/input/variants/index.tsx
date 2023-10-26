import { ReactElement, forwardRef } from 'react';
import { CustomInputRef, FieldProps, InputTypes } from '../index.interfaces';
import PasswordField from './PasswordField';
import TextField from './TextField';

type FieldMapper = {
  [key in InputTypes]: ReactElement;
}

const FieldVariant = forwardRef<CustomInputRef, FieldProps>((props, ref) => {
  const { type = 'text' } = props;

  const mapper: FieldMapper = {
    password: <PasswordField {...props} ref={ref} />,
    text: <TextField {...props} ref={ref} />,
    phone: <></>
  };

  return mapper[type];
});

FieldVariant.displayName = 'FieldVariant';

export default FieldVariant;