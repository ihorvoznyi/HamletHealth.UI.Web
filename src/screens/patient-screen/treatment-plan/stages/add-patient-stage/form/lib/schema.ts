import * as yup from 'yup';
import { UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { 
  FIRST_NAME_REQUIRED, 
  LAST_NAME_REQUIRED, 
  EMAIL_OR_PHONE_REQUIRED,
} from './constants';

import { AddPatientFormType } from './types';
import { Gender } from '@shared/lib/enums';

export const addPatientFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .default('')
    .required(FIRST_NAME_REQUIRED),
  lastName: yup
    .string()
    .default('')
    .required(LAST_NAME_REQUIRED),
  emailOrPhoneNumber: yup
    .string()
    .default('')
    .required(EMAIL_OR_PHONE_REQUIRED),
  birthDate: yup
    .string()
    .default(undefined)
    .optional(),
  gender: yup
    .mixed<Gender>()
    .oneOf([Gender.FEMALE, Gender.MALE])
    .default(undefined)
    .optional(),
}).required();

const defaultValues: AddPatientFormType = {
  firstName: '',
  lastName: '',
  emailOrPhoneNumber: '',
  birthDate: undefined,
  gender: undefined
};

export const options: UseFormProps<AddPatientFormType> = {
  defaultValues,
  resolver: yupResolver<AddPatientFormType>(addPatientFormSchema),
};
