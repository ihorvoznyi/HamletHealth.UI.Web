import { yupResolver } from '@hookform/resolvers/yup';
import { UseFormProps } from 'react-hook-form';
import * as yup from 'yup';

const sendEmailFormSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Email is not valid.')
      .required('Email is required.'),
  })
  .required(); 

export type SendEmailFormType = yup.InferType<typeof sendEmailFormSchema>;

export const options: UseFormProps<SendEmailFormType> = {
  mode: 'onTouched',
  defaultValues: {
    email: ''
  },
  reValidateMode: 'onChange',
  resolver: yupResolver(sendEmailFormSchema),
};