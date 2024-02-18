import * as yup from 'yup';
import { environmentSchema } from './schema';

export type EnvModeTypes = 'dev' | 'stage' | 'prod';
export type EnvironmentType = yup.InferType<typeof environmentSchema>;
