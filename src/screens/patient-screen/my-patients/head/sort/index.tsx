import { useState } from 'react';
import { DropDownSvg } from '@components/ui/svg';
import { classes } from './index.tailwind';

const Sort = () => {
  const [isAsc, setIsAsc] = useState<boolean>(true);

  return (
    <div className={classes.container} onClick={() => setIsAsc(prev => !prev)}>
      <p className={classes.paragraph}>Show names {isAsc ? 'A-Z' : 'Z-A'}</p>
      <DropDownSvg className={!isAsc ? 'rotate-180': ''} />
    </div>
  );
};

export default Sort;