export const combineRoutes = (...args: string[]) => {
	return args.join('/');
};

export const toNormalCase = (value: string) => {
	if (!value) {
		return '';
	}

	const capitalized = value[0].toUpperCase();

	return value.length > 1 ? capitalized + value.slice(1).toLowerCase() : capitalized;
};

export const isStringOnlyNumbers = (input: string) => {
	const regexPattern = /^\d+$/;
	return regexPattern.test(input);
};

export const isPhoneNumber = (input: string) => {
	const phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3,6}$/;
	return phoneNumberRegex.test(input);
};

export const includesCaseInsensitive = (value: string, searchTerm?: string) => {
	return value.toLowerCase().includes(searchTerm?.toLowerCase().trim() ?? '');
};

export const retrieveInitials = (fullname: string) => {
	if (!fullname) {
		return '-';
	}

	const splitted = fullname.split(' ');
	return (splitted[0][0] + splitted[splitted.length - 1][0]).toUpperCase();
};

export const formatFullname = (firstName: string, lastName: string) => {
	return `${toNormalCase(firstName)} ${toNormalCase(lastName)}`;
};

export function sortByKey<T>(array: T[], key: keyof T, ascending: boolean = true): T[] {
	return array.slice().sort((a, b) => {
		if (a[key] < b[key]) {
			return ascending ? -1 : 1;
		}
		if (a[key] > b[key]) {
			return ascending ? 1 : -1;
		}
		return 0;
	});
}
