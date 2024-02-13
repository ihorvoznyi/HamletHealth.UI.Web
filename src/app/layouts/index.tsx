import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/header';

interface PropsType {
  isAuth: boolean;
}

const Layout: FC<PropsType> = ({ isAuth }) => {
  const classes = isAuth ? 'mt-[80px] h-full' : '';

  return (
    <>
      <Header isAuth={isAuth} />
      <main className={classes}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;