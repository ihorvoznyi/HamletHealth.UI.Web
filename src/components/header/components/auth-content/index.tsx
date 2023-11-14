import { Link } from 'react-router-dom';

import { PlusSvg } from '@components/ui/icons';
import Button from '@components/ui/button';

import { classes } from './index.tailwind';
import { appRoutes } from '@configs/routes.config';

const navLinks = [
  {
    text: 'Dashboard',
    to: appRoutes.dashboard,
  },
  {
    text: 'My patients',
    to: appRoutes.patients,
  },
];

export const AuthHeaderContent = () => {
  return (
    <div className={classes.container}>
    <nav className={classes.nav}>
      {navLinks.map(link => {
        const linkStyle = appRoutes.dashboard === link.to ? classes.activeLink : classes.inactiveLink; // TODO: remove mock

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
