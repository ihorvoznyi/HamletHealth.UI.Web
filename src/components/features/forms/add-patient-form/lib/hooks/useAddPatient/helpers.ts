import { isPhoneNumber } from '@utils/text.util';
import { convertToISOString } from '@utils/date.util';

import { Role } from '@shared/lib/enums';
import { CreatePatientDto } from '@app/store/entities/user';
import { AddPatientFormType } from '../../types';

type PhoneOrEmailType = Pick<CreatePatientDto, 'email'> | Pick<CreatePatientDto, 'phone'>;

const determinePhoneOrEmail = (phoneOrEmail: string): PhoneOrEmailType => {
	const isEmail = phoneOrEmail.includes('@');

	if (isEmail) {
		return { email: phoneOrEmail };
	}

	if (isPhoneNumber(phoneOrEmail)) {
		return { phone: phoneOrEmail };
	}

	return { phone: undefined, email: undefined };
};

export const mapFormDataToCreatePatientDto = (formData: AddPatientFormType): CreatePatientDto => {
	const { phoneOrEmail, firstName, lastName, birthDate, gender } = formData;
	const phoneOrEmailObj = determinePhoneOrEmail(phoneOrEmail);

	return {
		password: '12345',
		firstName: firstName,
		lastName: lastName,
		birthDate: birthDate ? convertToISOString(birthDate) : undefined,
		gender,
		role: Role.PATIENT,
		...phoneOrEmailObj,
	};
};