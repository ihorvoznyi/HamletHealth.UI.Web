import GreetingScreen from '@screens/greeting';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../layouts';
import { SignUp } from '@screens/auth';
import AuthLayout from '../layouts/AuthLayout';
import Verification from '@screens/auth/verification';
import Home from '@screens/patient';
import AddPatient from '@screens/patient/add-patient';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/add-patient" element={<AddPatient />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify" element={<Verification />} />
      </Route>

      <Route index element={<GreetingScreen />} />
    </Route>
  ),
);
