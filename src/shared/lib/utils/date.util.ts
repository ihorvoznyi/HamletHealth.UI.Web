export const convertToISOString = (dateString: string) => {
	const dateParts = dateString.split('/');
	const date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);

	return date.toISOString();
};

export const formatDateAndAge = (dateOfBirth: Date) => {
	const formatDate = (date: Date): string => {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const month = months[date.getMonth()];
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

export const formatISOString = (date: string) => {
	return formatDateAndAge(new Date(date));
};

export const formatTimeISOString = (isoString: string) => {
	const date = new Date(isoString);

	const hours = date.getUTCHours().toString().padStart(2, '0');
	const minutes = date.getUTCMinutes().toString().padStart(2, '0');

	return `${hours} : ${minutes}`;
};
