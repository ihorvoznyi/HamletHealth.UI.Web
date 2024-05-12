import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '@components/layout';
import DashboardPage from './dashboard';
import MyPatientsPage from './my-patients';
import PatientPage from './patient';
import AddNewPatientPage from './add-new-patient';
import TreatmentPlanCreationPage from './treatment-plan';

import { APP_ROUTES } from '@configs/routes.config';

const Protected = () => {
	return (
		<>
			<Header isAuth={true} />
			<main className="min-h-[calc(100vh-80px)]">
				<Routes>
					<Route index element={<AddNewPatientPage />} />
					<Route path={APP_ROUTES.APP_PATIENT} element={<TreatmentPlanCreationPage />} />
					<Route path={APP_ROUTES.DASHBOARD} element={<DashboardPage />} />
					<Route path={APP_ROUTES.MY_PATIENTS} element={<MyPatientsPage />} />
					<Route path={APP_ROUTES.PATIENT} element={<PatientPage />} />
          <Route path="*" element={<Navigate to={APP_ROUTES.DASHBOARD} replace />} />
				</Routes>
			</main>
		</>
	);
};

export default Protected;
