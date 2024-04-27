import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '@components/layout';
import GreetingScreen from '@screens/greeting-screen';
import { SignUp, SignIn, ForgotPassword, Verification } from '@screens/auth-screen';

import { APP_ROUTES } from '@configs/routes.config';

const Guest = () => {
	return (
		<>
			<Header isAuth={false} />
			<main>
				<Routes>
					<Route path={APP_ROUTES.SIGN_UP} element={<SignUp />} />
					<Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
					<Route path={APP_ROUTES.FORGOT_PASS} element={<ForgotPassword />} />
					<Route path={APP_ROUTES.VERIFY} element={<Verification />} />
					<Route path={APP_ROUTES.GREETING} element={<GreetingScreen />} />
          <Route path="*" element={<Navigate to={APP_ROUTES.SIGN_IN} replace />} />
				</Routes>
			</main>
		</>
	);
};

export default Guest;
