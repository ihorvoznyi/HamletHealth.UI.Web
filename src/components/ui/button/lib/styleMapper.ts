import { ButtonTypes } from '../index.interfaces';
import { classes } from '../index.tailwind';

type ButtonVariantMapper = {
  [key in ButtonTypes]: string;
}

export function styleMapper(type: ButtonTypes) {
  const mapper: ButtonVariantMapper = {
    primary: classes.primary,
    outlined: classes.outlined,
    inherit: classes.inherit,
  };

  return mapper[type];
}