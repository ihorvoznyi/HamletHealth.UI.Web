import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuth } from '@entities/user';
import { appRoutes } from '@configs/routes.config';

import { useAppSelector } from '@shared/model';

const RequireAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to={appRoutes.auth.signIn} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;