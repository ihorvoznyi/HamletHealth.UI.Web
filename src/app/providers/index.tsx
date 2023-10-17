import { RouterProvider } from 'react-router-dom';
import { AppRouter } from '../navigator';

// Component contains all Providers of the appication
const AppProvider = () => {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default AppProvider;