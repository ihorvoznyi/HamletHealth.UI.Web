import { AddPatientDto } from '@entities/patient/api';
import { AddPatientFormType } from '..';

type PhoneOrEmailType = Pick<AddPatientDto, 'email'> | Pick<AddPatientDto, 'phone'>;

const determinePhoneOrEmail = (phoneOrEmail: string): PhoneOrEmailType => {
  const isEmail = phoneOrEmail.includes('@');

  if (isEmail) {
    return { email: phoneOrEmail };
  }

  return { phone: phoneOrEmail };
};

export const mapFormDataToAddPatientDto = (formData: AddPatientFormType): AddPatientDto => {
  const { emailOrPhoneNumber, firstName, lastName, birthDate, gender } = formData;
  const phoneOrEmail = determinePhoneOrEmail(emailOrPhoneNumber);

  return {
    password: '12345',
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate ? new Date().toISOString() : undefined,
    gender: gender ? +gender : undefined,
    role: 0,
    ...phoneOrEmail,
  };
};
