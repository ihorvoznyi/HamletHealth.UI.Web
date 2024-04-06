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