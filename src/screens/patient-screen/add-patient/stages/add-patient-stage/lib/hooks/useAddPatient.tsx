import { useForm } from 'react-hook-form';

import { options } from '../schema';

import { AddPatientFormType } from '../types';
import { FindPatientDto, useFindPatientMutation } from '@entities/patient/api';
import { setStageStatus } from '@screens/patient-screen/add-patient/stage-bar/lib';
import { setGlobalLoader } from '@app/store';
import { useActions } from '@hooks/useActions';

interface PropsType {
  processStage: () => void;
}

export const useAddPatient = ({ processStage }: PropsType) => {
  const [setGlobalLoaderBounded] = useActions([setGlobalLoader]);
  const [findPatientAsync] = useFindPatientMutation();
  const { 
    register, 
    control, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm<AddPatientFormType>(options);

  const submit = async (data: AddPatientFormType) => {

    const existingPatient = await findPatient({ 
      firstName: data.firstName,
      lastName: data.lastName,
      phoneOrEmail: data.emailOrPhoneNumber,
    });

    if (existingPatient) {
      // TODO: handle data replacing in the store based on the response
      handleProcess(processStage);
      return;
    }

    handleProcess(processStage);
  };

  const handleProcess = (process: () => void) => {
    process();
    setStageStatus({ stage: 'patientStatus', status: 'filled' });
  };

  const findPatient = async (findPatientDto: FindPatientDto): Promise<unknown> => {
    try {
      setGlobalLoaderBounded(true);
      const { data } = await findPatientAsync(findPatientDto) as { data: unknown };
      return data;
    } catch {
      return null;
    } finally {
      setGlobalLoaderBounded(false);
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
