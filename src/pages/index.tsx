import React from 'react';

import Guest from './guest';
import Protected from './protected';

import { selectIsAuth } from '@entities/user';
import { useAppSelector } from '@shared/model';

const Auth = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) {
    return <Protected />;
  }
  
  return <Guest />;
};

export default Auth;