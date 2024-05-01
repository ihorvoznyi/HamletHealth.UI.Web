export const convertToISOString = (dateString: string) => {
	const dateParts = dateString.split('/');
	const date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);

	return date.toISOString();
};

export const formatDateAndAge = (dateOfBirth: Date) => {
	const formatDate = (date: Date): string => {
		const month = monthMap[date.getMonth()];
		const day = date.getDate();
		const year = date.getFullYear();

		return `${month} ${day}, ${year}`;
	};

	const calculateAge = (birthDate: Date): number => {
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const isBirthdayPassedThisYear =
			today.getMonth() < birthDate.getMonth() ||
			(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

		if (isBirthdayPassedThisYear) {
			age--;
		}

		return age;
	};

	const formattedDate = formatDate(dateOfBirth);
	const age = calculateAge(dateOfBirth);

	return `${formattedDate} (${age} y.o.)`;
};

export const formatISOString = (date?: string) => {
	return date ? formatDateAndAge(new Date(date)) : '-';
};

export const formatTimeISOString = (isoString: string) => {
	const date = new Date(isoString);

	const hours = date.getUTCHours().toString().padStart(2, '0');
	const minutes = date.getUTCMinutes().toString().padStart(2, '0');

	return `${hours} : ${minutes}`;
};

export const monthMap: { [key: number]: string } = {
	0: 'Jan',
	1: 'Feb',
	2: 'Mar',
	3: 'Apr',
	4: 'May',
	5: 'Jun',
	6: 'Jul',
	7: 'Aug',
	8: 'Sep',
	9: 'Oct',
	10: 'Nov',
	11: 'Dec',
};

export const weekDayMap: { [key: number]: string } = {
	0: 'SUN',
	1: 'MON',
	2: 'TUE',
	3: 'WED',
	4: 'THU',
	5: 'FRI',
	6: 'SAT',
};
