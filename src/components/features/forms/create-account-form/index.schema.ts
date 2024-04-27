import * as yup from 'yup';
import { UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegistrationFormType } from './index.types';

import {
	REQUIRED_FIRST_NAME_FIELD,
	REQUIRED_EMAIL_FIELD,
	REQUIRED_PASSWORD_FIELD,
  REQUIRED_LAST_NAME_FIELD,
	INVALID_EMAIL,
} from '@shared/lib/constants';

export const RegistrationFormSchema = yup
	.object()
	.shape({
		email: yup.string().email(INVALID_EMAIL).default('').required(REQUIRED_EMAIL_FIELD),
		password: yup.string().default('').required(REQUIRED_PASSWORD_FIELD),
		repeatedPassword: yup.string().default('').required(REQUIRED_PASSWORD_FIELD),
		firstName: yup.string().default('').required(REQUIRED_FIRST_NAME_FIELD),
		lastName: yup.string().default('').required(REQUIRED_LAST_NAME_FIELD),
		specialty: yup.string().default(''),
		nationalProviderIdentifier: yup.string().default(''),
	})
	.required();

const defaultValues: RegistrationFormType = {
	email: '',
	password: '',
	repeatedPassword: '',
	firstName: '',
	lastName: '',
	specialty: '',
	nationalProviderIdentifier: '',
};

export const options: UseFormProps<RegistrationFormType> = {
	mode: 'onTouched',
	defaultValues,
	resolver: yupResolver<RegistrationFormType>(RegistrationFormSchema),
};
