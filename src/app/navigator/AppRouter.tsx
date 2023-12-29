import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '../layouts';
import AuthLayout from '../layouts/AuthLayout';
import GreetingScreen from '@screens/greeting-screen';
import { ForgotPassword, SignIn, SignUp, Verification } from '@screens/auth-screen';
import { MyPatients, AddPatient, PatientsStartPage, Dashboard, Patient } from '@screens/patient-screen';

import { appRoutes } from '@configs/routes.config';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={appRoutes.index}>
      <Route element={<Layout />}>
        <Route index element={<PatientsStartPage />} />
        <Route path={appRoutes.addPatient} element={<AddPatient />} />
        <Route path={appRoutes.dashboard} element={<Dashboard />} />
        <Route path={appRoutes.myPatients} element={<MyPatients />} />
        <Route path={appRoutes.patient} element={<Patient />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={appRoutes.auth.signUp} element={<SignUp />} />
        <Route path={appRoutes.auth.signIn} element={<SignIn />} />
        <Route path={appRoutes.auth.forgotPass} element={<ForgotPassword />} />
        <Route path={appRoutes.auth.verify} element={<Verification />} />
        <Route path={appRoutes.greeting} element={<GreetingScreen />} />
      </Route>
    </Route>
  ),
);
