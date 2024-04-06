import * as yup from 'yup';
import { UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EMAIL_OR_PHONE_REQUIRED, FIRST_NAME_REQUIRED, LAST_NAME_REQUIRED } from './constants';

import { AddPatientFormType } from './types';
import { Gender } from '@shared/lib/enums';
import { isPhoneNumber } from '@utils/text.util';

export const addPatientFormSchema = yup
	.object()
	.shape({
		firstName: yup.string().default('').required(FIRST_NAME_REQUIRED),
		lastName: yup.string().default('').required(LAST_NAME_REQUIRED),
		phoneOrEmail: yup
			.string()
			.test('is-phone-or-email', 'Must be a valid phone number or email address', value => {
				return yup.string().email().isValidSync(value) || isPhoneNumber(value);
			})
			.required(EMAIL_OR_PHONE_REQUIRED),

		birthDate: yup.string().default(undefined).optional(),
		gender: yup.mixed<Gender>().oneOf([Gender.FEMALE, Gender.MALE]).default(undefined).optional(),
	})
	.required();

const defaultValues: AddPatientFormType = {
	firstName: '',
	lastName: '',
	phoneOrEmail: '',
	birthDate: undefined,
	gender: undefined,
};

export const options: UseFormProps<AddPatientFormType> = {
	defaultValues,
	resolver: yupResolver<AddPatientFormType>(addPatientFormSchema),
};
