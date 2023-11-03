import React from 'react';
import { classes } from './index.tailwind';
import { Link } from 'react-router-dom';
import { PlusSvg } from '@components/ui/icons';
import Button from '@components/ui/button';

const navLinks = [
  {
    text: 'Dashboard',
    to: '/dashboard',
  },
  {
    text: 'My patients',
    to: '/patients',
  },
];

export const AuthHeaderContent = () => {
  return (
    <div className={classes.container}>
    <nav className={classes.nav}>
      {navLinks.map(link => {
        const linkStyle = '/dashboard' === link.to ? classes.activeLink : classes.inactiveLink; // TODO: remove mock

        return <Link key={link.to} to={link.to} className={linkStyle}>{link.text}</Link>;
      })}
      
    </nav>

    <Button styles={classes.btn} onClick={() => {}}>
      <PlusSvg />
      <span>Add new patient</span>
    </Button>

    <div className={classes.line} />

    <img src="./assets/avatar.png" alt="" className={classes.img} />
  </div>
  );
};
