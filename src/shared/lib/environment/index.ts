import { validateWithYup } from '@shared/lib/helpers';
import { environmentSchema } from './schema';

export const Environment = import.meta.env;

// export const Environment = validateWithYup(environmentSchema, env);
