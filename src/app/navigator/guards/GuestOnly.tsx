import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuth } from '@entities/user';
import { APP_ROUTES } from '@configs/routes.config';

import { useAppSelector } from '@shared/model';

const GuestOnly = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) {
    return <Navigate to={APP_ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default GuestOnly;