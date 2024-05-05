import { cn } from '@utils/style.util';

import { Logotype, AuthHeaderContent, BackButton } from './components';
import { classes } from './index.tailwind';

const Header = ({ isAuth }: { isAuth: boolean  }) => {
  return (
    <header className={cn(
      classes.header,
      !isAuth && 'bg-inherit',
    )}>
      <Logotype />
      
      {isAuth ? <AuthHeaderContent /> : <BackButton />}
      {isAuth && <div className={classes.line} />}
    </header>
  );
};

export default Header;
