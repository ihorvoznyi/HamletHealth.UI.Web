import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoading } from '@hooks/useLoading';
import { useLoginMutation } from '@app/store/entities/user';

import { options } from '@components/features/forms/login-form/index.schema';
import { APP_ROUTES } from '@configs/routes.config';

import { LoginFormDataType } from '@components/features/forms/login-form/index.types';
import { toast } from 'react-toastify';

export const useLogin = () => {
  const navigate = useNavigate();
  const { 
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormDataType>(options);
  const { setGlobalLoader } = useLoading();
  const [loginAsync] = useLoginMutation();
  
  const submit = (data: LoginFormDataType) => {
    const password = control._fields['password']?._f.value;

    setGlobalLoader(true);
    loginAsync({ ...data, password, role: 1 })
      .unwrap()
      .then(() => navigate(APP_ROUTES.DASHBOARD))
      .catch(() => {
        toast.error('Invalid email or password.', { position: 'top-center' });
      })
      .finally(() => setGlobalLoader(false));
  };
  
  return { 
    control,
    errors,
    register,
    handleSubmit: useCallback(handleSubmit(submit), []),
  };
};
