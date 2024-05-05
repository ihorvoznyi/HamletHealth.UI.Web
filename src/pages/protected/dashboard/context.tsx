import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import { endOfMonth, startOfMonth } from 'date-fns';

import { RangeType } from '@components/ui/controls/date-range-picker';

interface IDashboardContext {
	selectionRange: RangeType,
	setRange: (range: RangeType) => void;
}

const DashboardContext = createContext<IDashboardContext>({
	selectionRange: {
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date())
  },
	
	setRange: () => undefined,
});

export const DashboardProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [range, setRange] = useState<RangeType>({
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date()),
  });

  const value = {
    selectionRange: range,
    setRange,
  };

	return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export const useDashboardContext = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx) {
    throw new Error('useDashboardContext hook have to be called inside DashboardProvider');
  }
  return ctx;
};
