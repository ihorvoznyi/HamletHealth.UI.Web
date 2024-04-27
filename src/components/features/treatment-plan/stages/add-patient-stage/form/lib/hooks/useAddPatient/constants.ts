import { toNormalCase } from '@utils/text.util';

export const createAssignPatientErrMsg = (firstName: string, lastName: string) => {
	const message = `
		Unable to assign ${toNormalCase(firstName)} ${toNormalCase(lastName)} as a doctor's patient. 
		Check details and retry.
	`;

	return message;
};

export const failedFindOrCreateErrMessage = (firstName: string, lastName: string) => {
	return `Failed to find or create ${toNormalCase(firstName)} ${toNormalCase(lastName)} patient.`;
};