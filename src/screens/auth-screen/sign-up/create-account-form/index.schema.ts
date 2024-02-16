import * as yup from 'yup';
import { UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegistrationFormType } from './index.types';

import { REQUIRED_EMAIL_FIELD, REQUIRED_PASSWORD_FIELD } from '@shared/lib/constants';

export const RegistrationFormSchema = yup
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
    repeatedPassword: yup
      .string()
      .default('')
      .required(REQUIRED_PASSWORD_FIELD),
    firstName: yup
      .string()
      .default('')
      .required(''),
    lastName: yup
      .string()
      .default('')
      .required(''),
    specialty: yup
      .string()
      .default('')
      .required(''),
    nationalProviderIdentifier: yup
      .string()
      .default('')
      .required(''),
  })
  .required();

const defaultValues: RegistrationFormType = {
  email: '',
  password: '',
  repeatedPassword: '',
  firstName: '',
  lastName: '',
  specialty: '',
  nationalProviderIdentifier: ''
};

export const options: UseFormProps<RegistrationFormType> = {
  defaultValues,
  resolver: yupResolver<RegistrationFormType>(RegistrationFormSchema),
};
