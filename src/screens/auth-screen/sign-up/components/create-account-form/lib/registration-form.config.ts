import * as yup from 'yup';
import { UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegistrationFormData } from './registration-form.interfaces';

import { REQUIRED_EMAIL_FIELD, REQUIRED_PASSWORD_FIELD } from '@shared/lib/constants';

const schema = yup
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

const defaultValues: RegistrationFormData = {
  email: '',
  password: '',
  repeatedPassword: '',
  firstName: '',
  lastName: '',
  specialty: '',
  nationalProviderIdentifier: ''
};

export const options: UseFormProps<RegistrationFormData> = {
  defaultValues,
  resolver: yupResolver<RegistrationFormData>(schema),
};
