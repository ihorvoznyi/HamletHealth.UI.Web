import { DropDownSvg } from '@components/ui/svg';
import { useMyPatientContext } from '@components/features/my-patients/context';

import { classes } from './index.tailwind';

const Sort = () => {
  const { sortBy, setSortBy } = useMyPatientContext();

  const handleSort = () => {
    if (sortBy === 'ASC') {
      setSortBy('DESC');
      return;
    } 

    setSortBy('ASC');
  };

  return (
    <div className={classes.container} onClick={handleSort}>
      <p className={classes.paragraph}>Show names {sortBy === 'ASC' ? 'A-Z' : 'Z-A'}</p>
      <DropDownSvg className={sortBy === 'DESC' ? 'rotate-180': ''} />
    </div>
  );
};

export default Sort;