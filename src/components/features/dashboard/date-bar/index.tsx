import { Calendar } from '@components/ui/controls';

import { classes } from './index.tailwind';
import { useDashboardContext } from '@pages/protected/dashboard/context';

const DateBar = () => {
	const { selectionRange, setRange } = useDashboardContext();

	return (
		<div className={classes.container}>
			<h2 className={classes.h2}>All entries</h2>
			<Calendar shownDate={selectionRange.startDate} range={selectionRange} onSelect={setRange} />
		</div>
	);
};

export default DateBar;
