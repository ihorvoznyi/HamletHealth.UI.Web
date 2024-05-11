import { IPatient } from '@app/store/entities/treatment';

export const groupByFirstLetter = (items: IPatient[]) => {
  const group = items.reduce((acc: Record<string, IPatient[]>, item) => {
		const firstLetter = item.firstName[0].toUpperCase();

		if (!acc[firstLetter]) {
			acc[firstLetter] = [];
		}

		acc[firstLetter].push(item);

		return acc;
	}, {});

  return group;
};

export const formatDateAndAge = (dateOfBirth: Date) => {
  const formatDate = (date: Date): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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