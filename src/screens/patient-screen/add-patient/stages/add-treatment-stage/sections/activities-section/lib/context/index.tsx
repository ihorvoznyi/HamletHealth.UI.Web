import React, { PropsWithChildren, createContext, useState } from 'react';

import { ActivitiesFilterType } from '@entities/treatment-plan';
import { classes } from './index.tailwind';

interface IActivitiesContext {
  filterBy: ActivitiesFilterType;
  setFilterBy: (filterBy: ActivitiesFilterType) => void;
}

export const ActivitiesContext = createContext<IActivitiesContext | undefined>(undefined);

export const ActivitiesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [filterBy, setFilterBy] = useState<ActivitiesFilterType>('all');

  const value = { filterBy, setFilterBy };

  return (
    <ActivitiesContext.Provider value={value}>
      <div className={classes.container}>
        {children}
      </div>
    </ActivitiesContext.Provider>
  );
};
