import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { setCredentials, useRegisterMutation } from '@entities/user';
import { appRoutes } from '@configs/routes.config';
import { options } from '../registration-form.config';
import { RegistrationFormData } from '../registration-form.interfaces';
import { RegistrationMapper } from '../helpers';
import { useAppDispatch } from '@shared/model';

export const useRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { 
    register,
    handleSubmit,
    control,
    formState: { errors } 
  } = useForm<RegistrationFormData>(options);
  const [registerAsync] = useRegisterMutation();
  
  const submit = (data: RegistrationFormData) => {
    const registerDto = RegistrationMapper.mapToCreateUserDto(data);
    registerAsync(registerDto)
      .unwrap()
      .then((data) => {
        if (data) {
          dispatch(setCredentials(data));
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