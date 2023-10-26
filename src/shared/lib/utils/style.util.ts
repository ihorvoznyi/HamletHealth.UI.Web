import { twMerge } from 'tw-merge';

type ClassValue = 
  string 
  | undefined 
  | false 
  | { [key: string]: boolean | undefined | null };

export const cn = (...args: ClassValue[]): string => {
  return args
    .filter(Boolean) // remove falsey values
    .map((arg) => {
      if (typeof arg === 'string') {
        // String argument, use it as-is
        return arg;
      } if (typeof arg === 'object') {
        // Object argument, conditionally include classes
        return Object.entries(arg)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      // Unexpected type, ignore it
      return '';
    })
    .map((classNames) => twMerge(classNames)) // Merge classes with twMerge
    .join(' '); // Concatenate all class names together
};
