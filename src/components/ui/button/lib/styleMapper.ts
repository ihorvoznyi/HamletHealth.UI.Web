import { ButtonTypes } from '../index.interfaces';
import { RecordOf } from '@shared/lib/interfaces';

import { classes } from '../index.tailwind';

export function styleMapper(type: ButtonTypes) {
  const mapper: RecordOf<ButtonTypes, string> = {
    primary: classes.primary,
    outlined: classes.outlined,
    inherit: classes.inherit,
  };

  return mapper[type];
}