import * as yup from 'yup';

import { loginFormSchema } from './index.schema';

export type LoginFormDataType = yup.InferType<typeof loginFormSchema>;
