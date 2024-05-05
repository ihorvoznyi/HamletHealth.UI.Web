import { DateBar, Statistics, PatientCardList } from '@components/features/dashboard';

import { classes } from './index.tailwind';
import { DashboardProvider } from './context';

const DashboardPage = () => {
	return (
		<DashboardProvider>
			<div className={classes.container}>
				<div className={classes.head}>
					<h2 className={classes.title}>Dashboard</h2>
					<Statistics />
				</div>

				<div className={classes.dataContainer}>
					<DateBar />
					<PatientCardList />
				</div>
			</div>
		</DashboardProvider>
	);
};

export default DashboardPage;
