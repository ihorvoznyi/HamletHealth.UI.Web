import Header from '@components/layout/header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <Header isAuth={false} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;