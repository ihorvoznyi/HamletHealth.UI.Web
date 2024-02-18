import { validateWithYup } from '@shared/lib/helpers';
import { environmentSchema } from './schema';

const env = import.meta.env;

export const Environment = await validateWithYup(environmentSchema, env);
