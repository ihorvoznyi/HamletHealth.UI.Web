import * as yup from 'yup';

import { EnvModeTypes } from './types';

export const environmentSchema = yup.object({
  VITE_API_URL: yup.string().required(),
  VITE_ENV_MODE: yup.mixed<EnvModeTypes>().oneOf(['dev', 'stage', 'prod']).required(),
});
