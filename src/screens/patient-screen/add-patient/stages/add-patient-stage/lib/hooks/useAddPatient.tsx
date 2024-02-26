import { useForm } from 'react-hook-form';

import { options } from '../schema';

import { AddPatientFormType } from '../types';
import { FindPatientDto, useFindPatientMutation } from '@entities/patient/api';

interface PropsType {
  processStage: () => void;
}

export const useAddPatient = ({ processStage }: PropsType) => {
  const [findPatientAsync] = useFindPatientMutation();
  const { register, control, handleSubmit, formState: { errors } } = useForm<AddPatientFormType>(options);

  const submit = async (data: AddPatientFormType) => {
    const existingPatient = await findPatient({ 
      firstName: data.firstName,
      lastName: data.lastName,
      phoneOrEmail: data.emailOrPhoneNumber,
    });

    if (existingPatient) {
      // TODO: handle data replacing in the store based on the response
      processStage();
      return;
    }

    processStage();
  };

  const findPatient = async (findPatientDto: FindPatientDto) => {
    const { data } = await findPatientAsync(findPatientDto) as { data: unknown };
    return data;
  };

  return { 
    register,
    control,
    errors,
    submit: handleSubmit(submit)
  };
};
