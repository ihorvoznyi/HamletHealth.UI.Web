import { useForm } from 'react-hook-form';
import { bindActionCreators } from '@reduxjs/toolkit';

import { options } from '../schema';

import { useLoading } from '@hooks/useLoading';
import { useAppDispatch } from '@shared/model';

import { AddPatientFormType } from '../types';

import { 
  FindPatientDto, 
  treatmentPlanActions, 
  useFindPatientMutation 
} from '@entities/treatment-plan';

export const useAddPatient = () => {
  const { setGlobalLoader } = useLoading();
  const [findPatientAsync] = useFindPatientMutation();

  const { 
    register,
    control,
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm<AddPatientFormType>(options);
  const dispatch = useAppDispatch();
  const { setCurrentStage, setAddPatientStageData } = bindActionCreators(treatmentPlanActions, dispatch);

  const submit = async (data: AddPatientFormType) => {
    const existingPatient = await findPatient({ 
      firstName: data.firstName,
      lastName: data.lastName,
      phoneOrEmail: data.emailOrPhoneNumber,
    });

    if (existingPatient) {
      // TODO: update store using setAddPatientData with response
      // TODO: Update with existing patient
      // setAddPatientStageData(existingPatient);
      // setCurrentStage('treatmentPlan');
      // return;
    }

    setAddPatientStageData(data);
    setCurrentStage('treatmentPlan');
  };

  const findPatient = async (findPatientDto: FindPatientDto): Promise<unknown> => {
    try {
      setGlobalLoader(true);
      const { data } = await findPatientAsync(findPatientDto) as { data: unknown };
      return data;
    } finally {
      setGlobalLoader(false);
    }
  };

  return { 
    register,
    control,
    errors,
    isValid,
    submit: handleSubmit(submit)
  };
};
