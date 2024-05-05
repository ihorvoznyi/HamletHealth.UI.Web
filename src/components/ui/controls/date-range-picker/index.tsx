import React, { useState } from 'react';
import { DateRange, DateRangePicker as RangePicker } from 'react-date-range';
import { addDays, addMonths, subMonths } from 'date-fns';
import type { Range, RangeKeyDict, DateRangeProps } from 'react-date-range';

import { NextIcon, PrevIcon } from '@components/ui/icons/date-picker';

import { classes } from './index.tailwind';

import './custom-picker.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface PropsType extends DateRangeProps {
	onChange?: () => void;
	styles?: Partial<{
		container: string;
	}>;
}

const DateRangePicker: React.FC<PropsType> = () => {
	const [state, setState] = useState([
		{
			startDate: addDays(new Date(), 1),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	]);
	
	const [shownDate, setShownDate] = useState(new Date());

	const handlePrevMonth = () => {
		const prevMonth = subMonths(shownDate, 1);
		setShownDate(prevMonth);
	};

	const handleNextMonth = () => {
		const nextMonth = addMonths(shownDate, 1);
		setShownDate(nextMonth);
	};

	return (
		<div className="relative">
      <div className={classes.controls}>
        <button onClick={handlePrevMonth}>
					<PrevIcon className={classes.navArrow} />
				</button>
        <button onClick={handleNextMonth}>
					<NextIcon className={classes.navArrow} />
				</button>
      </div>
			<DateRange
				className="rounded-md shadow-gray"
				months={2}
				ranges={state}
				shownDate={shownDate}
				showMonthArrow={false}
				showDateDisplay={false}
				showMonthAndYearPickers={false}
				weekStartsOn={1}
				direction="horizontal"
				weekdayDisplayFormat="eeeee"
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onChange={(item: any) => setState([item.selection])}
			/>
		</div>
	);
};

export default DateRangePicker;
