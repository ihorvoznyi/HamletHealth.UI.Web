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
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormDataType>(options);
  const [loginAsync, { isSuccess }] = useLoginMutation();
  
  const submit = (data: LoginFormDataType) => {
    const password = control._fields['password']?._f.value;
    
    loginAsync({ ...data, password }).unwrap();

    if (isSuccess) {
      navigate(appRoutes.dashboard);
    }
  };
  
  return { 
    control,
    errors,
    register,
    handleSubmit: useCallback(handleSubmit(submit), []),
  };
};
