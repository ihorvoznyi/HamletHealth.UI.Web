import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { options } from '@screens/auth-screen/sign-up/create-account-form/index.schema';

import { APP_ROUTES } from '@configs/routes.config';

import { useRegisterMutation } from '@entities/user';

import { RegistrationMapper } from '@screens/auth-screen/sign-up/create-account-form/lib/helpers';

import { RegistrationFormType } from '@screens/auth-screen/sign-up/create-account-form/index.types';
import { useLoading } from '@hooks/useLoading';

export const useRegister = () => {
  const navigate = useNavigate();
  const { setGlobalLoader } = useLoading();

  const { 
    register,
    handleSubmit,
    control,
    formState: { errors } 
  } = useForm<RegistrationFormType>(options);
  const [registerAsync] = useRegisterMutation();
  
  const submit = (data: RegistrationFormType) => {
    const password = control._fields['password']?._f.value;
    const repeatedPassword = control._fields['repeatedPassword']?._f.value;

    if (password !== repeatedPassword) {
      return;
    }

    data.password = password;
    data.repeatedPassword = repeatedPassword;

    // const registerDto = RegistrationMapper.mapToCreateUserDto(data);
    const registerDto = RegistrationMapper.mapToCreateUserWithDoctorRoleDto(data);

    setGlobalLoader(true);
    registerAsync(registerDto)
      .unwrap()
      .then(() => navigate(APP_ROUTES.DASHBOARD))
      .finally(() => setGlobalLoader(false));
  };
  
  return { 
    handleSubmit: useCallback(handleSubmit(submit), []),
    errors,
    register,
    control
  };
};