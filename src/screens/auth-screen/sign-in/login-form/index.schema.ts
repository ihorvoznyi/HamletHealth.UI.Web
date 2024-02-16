import * as yup from 'yup';
import { UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginFormDataType } from './index.types';

import { REQUIRED_EMAIL_FIELD, REQUIRED_PASSWORD_FIELD } from '@shared/lib/constants';

export const loginFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
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
  defaultValues,
  resolver: yupResolver<LoginFormDataType>(loginFormSchema),
};
