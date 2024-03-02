import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoading } from '@hooks/useLoading';
import { useLoginMutation } from '@entities/user';

import { options } from '@screens/auth-screen/sign-in/login-form/index.schema';
import { APP_ROUTES } from '@configs/routes.config';

import { LoginFormDataType } from '@screens/auth-screen/sign-in/login-form/index.types';

export const useLogin = () => {
  const navigate = useNavigate();
  const { 
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormDataType>(options);
  const { setGlobalLoading } = useLoading();
  const [loginAsync] = useLoginMutation();
  
  const submit = (data: LoginFormDataType) => {
    const password = control._fields['password']?._f.value;

    setGlobalLoading(true);
    loginAsync({ ...data, password })
      .unwrap()
      .then(() => navigate(APP_ROUTES.DASHBOARD))
      .finally(() => setGlobalLoading(false));
  };
  
  return { 
    control,
    errors,
    register,
    handleSubmit: useCallback(handleSubmit(submit), []),
  };
};
