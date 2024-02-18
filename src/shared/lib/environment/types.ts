import * as yup from 'yup';
import { environmentSchema } from './schema';

export type EnvironmentType = yup.InferType<typeof environmentSchema>;
