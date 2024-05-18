import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

import { RangeType } from '@components/ui/controls/date-range-picker';
import { endOfMonthISO, startOfMonthISO } from '@utils/date.util';

interface IDashboardContext {
	selectionRange: RangeType,
	setRange: (range: RangeType) => void;
}

const DashboardContext = createContext<IDashboardContext>({
	selectionRange: {
    startDate: startOfMonthISO(),
    endDate: endOfMonthISO()
  },
	
	setRange: () => undefined,
});

export const DashboardProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [range, setRange] = useState<RangeType>({
    startDate: startOfMonthISO(),
    endDate: endOfMonthISO(),
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
