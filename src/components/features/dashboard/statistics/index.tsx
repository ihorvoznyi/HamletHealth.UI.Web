import StatCard from './stat-card';
import { Loader } from '@components/ui/common';
import { ContentIcon, ErrorIcon, PatientIcon, SettingsIcon } from '@components/ui/icons/dashboard';
import { useGetDashboardStatsQuery } from '@app/store/entities/treatment';

import { ToastHelper } from '@shared/lib/helpers';

import { classes } from './index.tailwind';
import { isUnauthorizedError } from '@utils/http.util';

const Statistics = () => {
	const { data: statistics, isLoading, isError, error } = useGetDashboardStatsQuery();

	if (isError && !isUnauthorizedError(error)) {
		ToastHelper.error('Failed to load statistics', { toastId: 'dashboard-statistics-error' });
		return;
	}

	return (
		<div className={classes.container}>
			{isLoading ? (
				<Loader
					styles={{ container: 'w-full h-[174px] flex self-center items-center justify-center' }}
				/>
			) : (
				<>
					<StatCard label="My patients" value={statistics?.accountsSetup} Icon={<PatientIcon />} />
					<StatCard
						label="Accounts need setup"
						value={(statistics?.patientsCount ?? 0) - (statistics?.accountsSetup ?? 0)}
						Icon={<SettingsIcon />}
					/>
					<StatCard
						label="Entries to monitor"
						value={statistics?.entriesTpReview}
						Icon={<ContentIcon />}
					/>
					<StatCard label="Patient has a critical issue" value={undefined} Icon={<ErrorIcon />} />
				</>
			)}
		</div>
	);
};

export default Statistics;
