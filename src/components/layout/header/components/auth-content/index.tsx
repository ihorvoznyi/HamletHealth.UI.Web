import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { PlusSvg } from '@components/ui/svg';
import PrimaryButton from '@components/ui/controls/button';

import { classes } from './index.tailwind';
import { APP_ROUTES } from '@configs/routes.config';
import { useEffect, useState } from 'react';
import { useActions } from '@hooks/useActions';
import { logout } from '@entities/user';

const navLinks = [
  {
    text: 'Dashboard',
    to: APP_ROUTES.DASHBOARD,
  },
  {
    text: 'My patients',
    to: APP_ROUTES.MY_PATIENTS,
  },
];

export const AuthHeaderContent: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [boundLogout] = useActions([logout]);
  const [activeLink, setActiveLink] = useState('');

  const handleNavigate = (to: string) => {
    setActiveLink(to);
  };

  useEffect(() => {
    const foundLink = navLinks.find(link => link.to === location.pathname);
    
    if (foundLink) {
      setActiveLink(foundLink.to);
      return;
    } 

    setActiveLink('');
  }, [location.pathname]);

  const handleLogout = () => {
    // do some logic
    boundLogout();
  };

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        {navLinks.map(link => (
            <Link
              to={link.to} 
              key={link.to} 
              onClick={() => handleNavigate(link.to)}
              className={activeLink === link.to ? classes.activeLink : classes.inactiveLink}
            >
              {link.text}
            </Link>
          ))}
      </nav>

      <PrimaryButton styles={classes.btn} onClick={() => navigate(APP_ROUTES.APP_PATIENT)}>
        <PlusSvg />
        <span>Add new patient</span>
      </PrimaryButton>

      <div className={classes.line} />

      <img src="/assets/avatar.png" alt="" className={classes.img} onClick={handleLogout} />
    </div>
  );
};
