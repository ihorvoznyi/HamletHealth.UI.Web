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