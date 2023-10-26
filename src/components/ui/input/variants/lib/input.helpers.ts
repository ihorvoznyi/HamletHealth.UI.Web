export const hidePassword = (password: string): string => {
  return password
    .split('')
    .filter(char => char !== ' ')
    .map(() => '-')
    .join('');
};