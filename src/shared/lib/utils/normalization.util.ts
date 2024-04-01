export const normalizeDate = (value: string) => {
  value = value.replace(/[^\d]/g, '');

  if (value.length > 2 && value.length <= 4) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  } else if (value.length > 4 && value.length < 10) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 10);
  }

  return value.slice(0, 10);
};
