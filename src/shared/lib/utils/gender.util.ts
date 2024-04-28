import { Gender } from '../enums';

export const getGenderName = (gender?: Gender): string => {
  if (gender === Gender.MALE) {
    return 'Male';
  } else if (gender === Gender.FEMALE) {
    return 'Female';
  }

	return '-';
};