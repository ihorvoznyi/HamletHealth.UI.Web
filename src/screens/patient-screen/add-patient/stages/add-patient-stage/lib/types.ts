import { InferType } from 'yup';
import { addPatientFormSchema } from './schema';

export type AddPatientFormType = InferType<typeof addPatientFormSchema>;
