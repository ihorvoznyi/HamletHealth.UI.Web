import { Outlet } from 'react-router-dom';
import Header from '@components/header';

const Layout = () => {
  return (
    <>
      <Header isAuth />
      <main className="mt-[80px] h-full">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;