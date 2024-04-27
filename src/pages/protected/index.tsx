import { Header } from '@components/layout';
import { APP_ROUTES } from '@configs/routes.config';
import { PatientsStartPage, CreateTreatmentPlan, Dashboard, MyPatients, Patient } from '@screens/patient-screen';
import { Navigate, Route, Routes } from 'react-router-dom';

const Protected = () => {
	return (
		<>
			<Header isAuth={true} />
			<main>
				<Routes>
					<Route index element={<PatientsStartPage />} />
					<Route path={APP_ROUTES.APP_PATIENT} element={<CreateTreatmentPlan />} />
					<Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
					<Route path={APP_ROUTES.MY_PATIENTS} element={<MyPatients />} />
					<Route path={APP_ROUTES.PATIENT} element={<Patient />} />
          <Route path="*" element={<Navigate to={APP_ROUTES.DASHBOARD} replace />} />
				</Routes>
			</main>
		</>
	);
};

export default Protected;
