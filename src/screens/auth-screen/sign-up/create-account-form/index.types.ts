import * as yup from 'yup';
import { RegistrationFormSchema } from './index.schema';

export type RegistrationFormType = yup.InferType<typeof RegistrationFormSchema>;
