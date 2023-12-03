import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from '../layouts';
import AuthLayout from '../layouts/AuthLayout';
import GreetingScreen from '@screens/greeting';
import { SignUp, Verification } from '@screens/auth';
import { MyPatients, AddPatient, PatientsStartPage } from '@screens/patient';

import { appRoutes } from '@configs/routes.config';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={appRoutes.index}>
      <Route element={<Layout />}>
        <Route path={appRoutes.dashboard} element={<div>Dashboard</div>} />
        <Route index element={<PatientsStartPage />} />
        <Route path={appRoutes.addPatient} element={<AddPatient />} />
        <Route path={appRoutes.myPatients} element={<MyPatients />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={appRoutes.auth.signUp} element={<SignUp />} />
        <Route path={appRoutes.auth.verify} element={<Verification />} />
        <Route index element={<GreetingScreen />} />
      </Route>
    </Route>
  ),
);
