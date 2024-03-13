import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '../layouts';
import GuestOnly from './guards/GuestOnly';
import RequireAuth from './guards/RequireAuth';
import GreetingScreen from '@screens/greeting-screen';
import { ForgotPassword, SignIn, SignUp, Verification } from '@screens/auth-screen';
import { MyPatients, CreateTreatmentPlan, PatientsStartPage, Dashboard, Patient } from '@screens/patient-screen';

import { APP_ROUTES } from '@configs/routes.config';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={APP_ROUTES.BASE}>
      <Route element={<RequireAuth />}>
        <Route element={<Layout isAuth />}>
          <Route index element={<PatientsStartPage />} />
          <Route path={APP_ROUTES.APP_PATIENT} element={<CreateTreatmentPlan />} />
          <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={APP_ROUTES.MY_PATIENTS} element={<MyPatients />} />
          <Route path={APP_ROUTES.PATIENT} element={<Patient />} />
        </Route>
      </Route>

      <Route element={<GuestOnly />}>
        <Route element={<Layout isAuth={false} />}>
          <Route path={APP_ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={APP_ROUTES.FORGOT_PASS} element={<ForgotPassword />} />
          <Route path={APP_ROUTES.VERIFY} element={<Verification />} />
          <Route path={APP_ROUTES.GREETING} element={<GreetingScreen />} />
        </Route>
      </Route>
    </Route>
  ),
);
