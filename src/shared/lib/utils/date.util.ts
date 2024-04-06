export const convertToISOString = (dateString: string) => {
  const dateParts = dateString.split('/');
  const date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);

  return date.toISOString();
};