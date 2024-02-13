import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuth } from '@entities/user';
import { appRoutes } from '@configs/routes.config';

import { useAppSelector } from '@shared/model';

const GuestOnly = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) {
    return <Navigate to={appRoutes.dashboard} replace />;
  }

  return <Outlet />;
};

export default GuestOnly;