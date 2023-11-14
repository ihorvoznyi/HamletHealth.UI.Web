import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { SignUp } from '@screens/auth';
import Layout from '../layouts';
import AuthLayout from '../layouts/AuthLayout';
import AddPatient from '@screens/patient/add-patient';
import Verification from '@screens/auth/verification';
import GreetingScreen from '@screens/greeting';
import PatientDashboard from '@screens/patient/add-patient/dashboard';

import { appRoutes } from '@configs/routes.config';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={appRoutes.index}>
      <Route element={<Layout />}>
        <Route path={appRoutes.dashboard} element={<PatientDashboard />} />
        <Route path={appRoutes.addPatient} element={<AddPatient />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={appRoutes.auth.signUp} element={<SignUp />} />
        <Route path={appRoutes.auth.verify} element={<Verification />} />
      </Route>

      <Route index element={<GreetingScreen />} />
    </Route>
  ),
);
