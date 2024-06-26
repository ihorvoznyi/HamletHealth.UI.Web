import { endOfMonth, format, parseISO, startOfMonth } from 'date-fns';

export const convertToISOString = (dateString: string) => {
  const dateParts = dateString.split('/');
  const date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);

  return date.toISOString();
};

export const formatDateAndAge = (dateOfBirth: Date) => {
  const formatDate = (date: Date): string => {
    const month = monthShortMap[date.getMonth()];
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

export const formatISOStringAsBirthDate = (date?: string) => {
  return date ? formatDateAndAge(parseISO(date)) : '-';
};

export const formatTimeISOString = (isoString: string) => {
  const date = parseISO(isoString);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours} : ${minutes}`;
};

export const sortByDate = (dateISOA: string, dateISOB: string) => {
  const dateA = parseISO(dateISOA).getTime();
  const dateB = parseISO(dateISOB).getTime();

  return dateA - dateB;
};

export const endOfMonthISO = (date: Date = new Date()) => {
  return endOfMonth(date).toISOString();
};

export const startOfMonthISO = (date: Date = new Date()) => {
  return startOfMonth(date).toISOString();
};

/**
 * Formats a date string in ISO format to 'd.MM' format in UTC.
 * @param dateString - The ISO date string to format.
 * @returns The formatted date string.
 */
export const formatDateToDM = (dateString: string): string => {
  return format(parseISO(dateString), 'd.MM');
};

// Mappers
export const monthShortMap: { [key: number]: string } = {
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

export const monthMap: { [key: number]: string } = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'Jun',
  6: 'July',
  7: 'Augest',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
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
