import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '@components/layout';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';
import GreetingPage from './greeting';
import VerificationPage from './verification';
import PasswordRestorationPage from './password-restoration';

import { APP_ROUTES } from '@configs/routes.config';

const Guest = () => {
	return (
		<>
			<Header isAuth={false} />
			<main>
				<Routes>
					<Route path={APP_ROUTES.SIGN_UP} element={<SignUpPage />} />
					<Route path={APP_ROUTES.SIGN_IN} element={<SignInPage />} />
					<Route path={APP_ROUTES.FORGOT_PASS} element={<PasswordRestorationPage />} />
					<Route path={APP_ROUTES.VERIFY} element={<VerificationPage />} />
					<Route path={APP_ROUTES.GREETING} element={<GreetingPage />} />
          <Route path="*" element={<Navigate to={APP_ROUTES.SIGN_IN} replace />} />
				</Routes>
			</main>
		</>
	);
};

export default Guest;
