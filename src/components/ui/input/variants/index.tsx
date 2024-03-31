import React, { ReactElement} from 'react';

import TextField from './text';
import PasswordField from './password';

import { useInput } from '../lib/hooks';

import { RecordOf } from '@shared/lib/types';
import { FieldProps, InputTypes } from '../index.interfaces';

const FieldVariant: React.FC<FieldProps> = ({ ...props }) => {
  const { type } = useInput();

  const mapper: RecordOf<InputTypes, ReactElement> = {
    password: <PasswordField {...props} />,
    text: <TextField {...props} />,
    phone: <></>,
    textarea: <></>
  };

  return mapper[type];
};

export default FieldVariant;
