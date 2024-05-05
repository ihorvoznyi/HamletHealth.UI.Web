import React, { useState } from 'react';

import { DateSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';
import DateRangePicker from '@components/ui/controls/date-range-picker';
import { useClickOutside } from '@hooks/useClickOutside';

interface PropsType {
	date: string;
}

const DateItem: React.FC<PropsType> = ({ date }) => {
	const ref = useClickOutside<HTMLDivElement>(() => setShowPicker(false));
	const [showPicker, setShowPicker] = useState(false);

	return (
		<div ref={ref} className={classes.container} onClick={() => setShowPicker(prev => !prev)}>
			<DateSvg className={classes.icon} />
			<p className={classes.month}>{date}</p>

			{showPicker ? (
				<div onClick={e => e.stopPropagation()} className="absolute top-[110%] right-0 z-50">
					<DateRangePicker onSelect={console.log} />
				</div>
			) : null}
		</div>
	);
};

export default DateItem;
