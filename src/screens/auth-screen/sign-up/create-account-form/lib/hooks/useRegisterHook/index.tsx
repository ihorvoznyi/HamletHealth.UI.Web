import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { options } from '@screens/auth-screen/sign-up/create-account-form/index.schema';

import { appRoutes } from '@configs/routes.config';

import { useActions } from '@hooks/index';
import { setCredentials, useRegisterMutation } from '@entities/user';

import { RegistrationMapper } from '@screens/auth-screen/sign-up/create-account-form/lib/helpers';

import { RegistrationFormType } from '@screens/auth-screen/sign-up/create-account-form/index.types';

export const useRegister = () => {
  const navigate = useNavigate();
  const [boundSetCredentials] = useActions([setCredentials]);

  const { 
    register,
    handleSubmit,
    control,
    formState: { errors } 
  } = useForm<RegistrationFormType>(options);
  const [registerAsync] = useRegisterMutation();
  
  const submit = (data: RegistrationFormType) => {
    const registerDto = RegistrationMapper.mapToCreateUserDto(data);
    registerAsync(registerDto)
      .unwrap()
      .then((data) => {
        if (data) {
          boundSetCredentials(data);
          navigate(appRoutes.dashboard);
        }
      });
  };
  
  return { 
    handleSubmit: useCallback(handleSubmit(submit), []),
    errors,
    register,
    control
  };
};