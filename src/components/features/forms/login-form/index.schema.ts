import * as yup from 'yup';
import { UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginFormDataType } from './index.types';

import { INVALID_EMAIL, REQUIRED_EMAIL_FIELD, REQUIRED_PASSWORD_FIELD } from '@shared/lib/constants';

export const loginFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email(INVALID_EMAIL)
      .default('')
      .required(REQUIRED_EMAIL_FIELD),
    password: yup
      .string()
      .default('')
      .required(REQUIRED_PASSWORD_FIELD),
  })
  .required();

const defaultValues: LoginFormDataType = {
  email: '',
  password: '',
};

export const options: UseFormProps<LoginFormDataType> = {
  mode: 'onTouched',
  defaultValues,
  resolver: yupResolver<LoginFormDataType>(loginFormSchema),
};
