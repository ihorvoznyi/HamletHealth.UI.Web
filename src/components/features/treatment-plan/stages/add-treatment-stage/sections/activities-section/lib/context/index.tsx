import React, { PropsWithChildren, createContext, useState } from 'react';

import { ActivitiesFilterType } from '@entities/patient';
import { classes } from './index.tailwind';

interface IActivitiesContext {
  filterBy: ActivitiesFilterType;
  searchStatement: string;

  setFilterBy: (filterBy: ActivitiesFilterType) => void;
  setSearchStatement: (statement: string) => void;
}

export const ActivitiesContext = createContext<IActivitiesContext | undefined>(undefined);

export const ActivitiesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [filterBy, setFilterBy] = useState<ActivitiesFilterType>('all');
  const [searchStatement, setSearchStatement] = useState('');

  const value = { 
    searchStatement, 
    filterBy, 
    setFilterBy, 
    setSearchStatement 
  };

  return (
    <ActivitiesContext.Provider value={value}>
      <div className={classes.container}>
        {children}
      </div>
    </ActivitiesContext.Provider>
  );
};
