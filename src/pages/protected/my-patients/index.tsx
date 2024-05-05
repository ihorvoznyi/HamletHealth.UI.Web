import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Head, PatientList } from '@components/features/my-patients';
import { MyPatientsProvider } from '@components/features/my-patients/context';

import { useLoading } from '@hooks/useLoading';
import { useGetPatientsQuery } from '@app/store/entities/patient';

import { APP_ROUTES } from '@configs/routes.config';
import { ToastHelper } from '@shared/lib/helpers';
import { isUnauthorizedError } from '@utils/http.util';

import { classes } from './index.tailwind';

const MyPatientsPage = () => {
	const { setGlobalLoader } = useLoading();
	const { data: patients = [], isLoading, isError, error } = useGetPatientsQuery();

	useEffect(() => {
		setGlobalLoader(isLoading);

		return () => {
			setGlobalLoader(false);
		};
	}, [isLoading]);

	if (isError && !isUnauthorizedError(error)) {
		ToastHelper.error('Failed to get list of patients.', {
			toastId: 'dashboard-patients-list-error',
		});
		return <Navigate to={APP_ROUTES.DASHBOARD} />;
	}

	return (
		<MyPatientsProvider>
			<div className={classes.container}>
				<Head total={patients.length} />
				<PatientList patients={patients} />
			</div>
		</MyPatientsProvider>
	);
};

export default MyPatientsPage;
