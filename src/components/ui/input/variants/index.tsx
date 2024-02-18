import { FC, ReactElement} from 'react';

import TextField from './text';
import PasswordField from './password';

import { RecordOf } from '@shared/lib/interfaces';
import { FieldProps, InputTypes } from '../index.interfaces';

const FieldVariant: FC<FieldProps> = ({ ...props }) => {
  const mapper: RecordOf<InputTypes, ReactElement> = {
    password: <PasswordField {...props} />,
    text: <TextField {...props} />,
    phone: <></>,
    textarea: <></>
  };

  return mapper[props.type];
};

export default FieldVariant;
