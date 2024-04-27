import { yupResolver } from '@hookform/resolvers/yup';
import { UseFormProps } from 'react-hook-form';
import * as yup from 'yup';

const definePlanSchema = yup
  .object()
  .shape({
    name: yup.string().required('Treatment plan name is required.'),
    description: yup.string().required('Treatment plan description is required'),
  })
  .required();

type DefinePlanFormType = yup.InferType<typeof definePlanSchema>;

const defaultValues: DefinePlanFormType = {
  name: '',
  description: ''
};

const formSchemaOptions: UseFormProps<DefinePlanFormType>  = {
  defaultValues,
  resolver: yupResolver(definePlanSchema),
};

export { definePlanSchema, formSchemaOptions };
export type { DefinePlanFormType };
