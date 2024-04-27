import React from 'react';

import Sort from './sort';
import Search from '@components/ui/controls/search';
import { useMyPatientContext } from '../context';

import { classes } from './index.tailwind';

const Head: React.FC<{ total: number }> = () => {
  const { total, setSearchTerm } = useMyPatientContext();

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h2 className={classes.title}>My patients</h2>
        <span className={classes.count}>({total})</span>
      </div>

      <div className={classes.filterContainer}>
        <Sort />
        <Search
          placeholder="Search patients, diagnosis, more"
          styles={classes.search}
          isCloseIcon={false}
          onChange={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default Head;
