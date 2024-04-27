import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '@components/layout';
import DashboardPage from '@pages/protected/dashboard';
import { PatientsStartPage, CreateTreatmentPlan, MyPatients, Patient } from '@screens/patient-screen';

import { APP_ROUTES } from '@configs/routes.config';

const Protected = () => {
	return (
		<>
			<Header isAuth={true} />
			<main>
				<Routes>
					<Route index element={<PatientsStartPage />} />
					<Route path={APP_ROUTES.APP_PATIENT} element={<CreateTreatmentPlan />} />
					<Route path={APP_ROUTES.DASHBOARD} element={<DashboardPage />} />
					<Route path={APP_ROUTES.MY_PATIENTS} element={<MyPatients />} />
					<Route path={APP_ROUTES.PATIENT} element={<Patient />} />
          <Route path="*" element={<Navigate to={APP_ROUTES.DASHBOARD} replace />} />
				</Routes>
			</main>
		</>
	);
};

export default Protected;
