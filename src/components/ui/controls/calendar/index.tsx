import React, { useState } from 'react';

import { DateSvg } from '@components/ui/svg';
import { DateRangePicker } from '@components/ui/controls';
import { useClickOutside } from '@hooks/useClickOutside';

import { monthMap } from '@utils/date.util';

import type { RangeType } from '@components/ui/controls/date-range-picker';

import { classes } from './index.tailwind';
import { parseISO } from 'date-fns';

interface PropsType {
  shownDate: string;
  range?: RangeType;
  onSelect?: (range: RangeType) => void;
}

const Calendar: React.FC<PropsType> = ({ shownDate, range, onSelect }) => {
  const [displayDate, setDisplayDate] = useState<string>(shownDate);
  const ref = useClickOutside<HTMLDivElement>(() => setShowPicker(false));
  const [showPicker, setShowPicker] = useState(false);

  const handleSelect = (range: RangeType) => {
    setDisplayDate(range.startDate);
    onSelect?.(range);
    setShowPicker(false);
  };

  return (
    <div ref={ref} className={classes.container} onClick={() => setShowPicker((prev) => !prev)}>
      <DateSvg className={classes.icon} />
      <p className={classes.month}>{monthMap[parseISO(displayDate)?.getMonth()]}</p>

      {showPicker ? (
        <div onClick={(e) => e.stopPropagation()} className="absolute top-[110%] right-0 z-50">
          <DateRangePicker range={range} onSelect={handleSelect} />
        </div>
      ) : null}
    </div>
  );
};

export default Calendar;
