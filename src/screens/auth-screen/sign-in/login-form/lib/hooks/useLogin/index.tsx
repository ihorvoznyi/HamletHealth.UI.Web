import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '@entities/user';
import { appRoutes } from '@configs/routes.config';
import { options } from '@screens/auth-screen/sign-in/login-form/index.schema';
import { LoginFormDataType } from '@screens/auth-screen/sign-in/login-form/index.types';

export const useLogin = () => {
  const navigate = useNavigate();
  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm<LoginFormDataType>(options);
  const [loginAsync, { isSuccess }] = useLoginMutation();
  
  const submit = (data: LoginFormDataType) => {
    loginAsync(data).unwrap();

    if (isSuccess) {
      navigate(appRoutes.dashboard);
    }
  };
  
  return { 
    handleSubmit: useCallback(handleSubmit(submit), []),
    errors,
    register,
  };
};
