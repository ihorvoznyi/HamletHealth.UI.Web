import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuth } from '@entities/user';
import { APP_ROUTES } from '@configs/routes.config';

import { useAppSelector } from '@shared/model';

const RequireAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to={APP_ROUTES.SIGN_IN} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;