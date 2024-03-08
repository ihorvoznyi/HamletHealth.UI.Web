import { GenderEnum } from '@shared/lib/types';

export const GENDER_OPTIONS = [
  { label: 'Male', value: GenderEnum.MALE }, 
  { label: 'Female', value: GenderEnum.FEMALE }
];

export const FIRST_NAME_REQUIRED = 'First name is required';
export const LAST_NAME_REQUIRED = 'Last name is required';
export const EMAIL_OR_PHONE_REQUIRED = 'Email or Phone is required';
export const INVALID_EMAIL_OR_PHONE = 'Invalid Email or Phone';
export const INVALID_BIRTH_DATE = 'Invalid Birth Date';