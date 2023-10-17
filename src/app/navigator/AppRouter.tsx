import GreetingScreen from '@screens/greeting';
import TempComponent from '@screens/temp';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<GreetingScreen />} />
      <Route path="/sign-up" element={<TempComponent />} />
    </Route>
  ),
);
