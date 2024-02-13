import { FC, ReactElement} from 'react';

import TextField from './TextField';
import PasswordField from './PasswordField';

import { FieldProps, InputTypes } from '../index.interfaces';
import { UseFormRegisterReturn } from 'react-hook-form';

type FieldMapper = {
  [key in InputTypes]: ReactElement;
}

interface PropsType extends FieldProps {
  register: Omit<UseFormRegisterReturn, 'onChange' | 'onBlur'>;
}

const FieldVariant: FC<PropsType> = ({ ...props }) => {
  const { type = 'text' } = props;

  const mapper: FieldMapper = {
    password: <PasswordField {...props} />,
    text: <TextField {...props} />,
    phone: <></>,
    textarea: <></>
  };

  return mapper[type];
};

FieldVariant.displayName = 'FieldVariant';

export default FieldVariant;
