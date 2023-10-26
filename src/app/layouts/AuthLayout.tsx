import Header from '@components/header';
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