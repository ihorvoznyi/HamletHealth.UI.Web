import { CreatePatientDto } from '@entities/user';
import { AddPatientFormType } from '..';
import { convertToISOString } from '@utils/date.util';

type PhoneOrEmailType = Pick<CreatePatientDto, 'email'> | Pick<CreatePatientDto, 'phone'>;

const determinePhoneOrEmail = (phoneOrEmail: string): PhoneOrEmailType => {
	const isEmail = phoneOrEmail.includes('@');

	if (isEmail) {
		return { email: phoneOrEmail };
	}

	return { phone: phoneOrEmail };
};

export const mapFormDataToAddPatientDto = (formData: AddPatientFormType): CreatePatientDto => {
	const { emailOrPhoneNumber, firstName, lastName, birthDate, gender } = formData;
	const phoneOrEmail = determinePhoneOrEmail(emailOrPhoneNumber);

	return {
		password: '12345',
		firstName: firstName,
		lastName: lastName,
		birthDate: birthDate ? convertToISOString(birthDate) : undefined,
		gender,
		role: 0,
		...phoneOrEmail,
	};
};
