import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { PlusSvg } from '@components/ui/svg';
import Button from '@components/ui/button';

import { classes } from './index.tailwind';
import { appRoutes } from '@configs/routes.config';
import { useEffect, useState } from 'react';
import { useActions } from '@hooks/useActions';
import { logout } from '@entities/user';

const navLinks = [
  {
    text: 'Dashboard',
    to: appRoutes.dashboard,
  },
  {
    text: 'My patients',
    to: appRoutes.myPatients,
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

      <Button styles={classes.btn} onClick={() => navigate(appRoutes.addPatient)}>
        <PlusSvg />
        <span>Add new patient</span>
      </Button>

      <div className={classes.line} />

      <img src="/assets/avatar.png" alt="" className={classes.img} onClick={handleLogout} />
    </div>
  );
};
