import React, { useCallback, useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import type { Range, RangeKeyDict } from 'react-date-range';

import './range-picker.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { endOfMonth, startOfMonth } from 'date-fns';

export type RangeType = {
	startDate: Date;
	endDate: Date;
}

interface PropsType {
	range?: RangeType
	onSelect?: (range: RangeType) => void;
}

const DateRangePicker: React.FC<PropsType> = ({ range, onSelect }) => {
	const [isSelecting, setIsSelecting] = useState(false);
	const [state, setState] = useState<Range[]>([
		{
			key: 'selection',
			startDate: range?.startDate ?? startOfMonth(new Date()),
			endDate: range?.endDate ?? endOfMonth(new Date()),
		},
	]);

	const handleChange = useCallback(
		(rangesByKey: RangeKeyDict) => {
			setState([rangesByKey.selection]);

			if (!isSelecting) {
				setIsSelecting(true);
				return;
			}

			setIsSelecting(false);
			const selection = rangesByKey.selection;
			onSelect?.({ startDate: selection.startDate!, endDate: selection.endDate! });
		},
		[isSelecting]
	);

	useEffect(() => {
		const changeButtonLabels = () => {
			const buttons = document.querySelectorAll('.rdrMonthAndYearWrapper button');
			if (buttons.length === 2) {
				buttons[0].textContent = '<';
				buttons[1].textContent = '>';
			}
		};

		changeButtonLabels();
	}, []);

	return (
		<DateRange
			className="rounded-md shadow-gray"
			months={2}
			ranges={state}
			showMonthArrow={true}
			showDateDisplay={false}
			showMonthAndYearPickers={false}
			weekStartsOn={1}
			direction="horizontal"
			editableDateInputs
			weekdayDisplayFormat="eeeee"
			onChange={handleChange}
		/>
	);
};

export default DateRangePicker;
