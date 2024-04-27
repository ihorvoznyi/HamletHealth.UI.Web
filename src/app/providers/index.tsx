import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { GlobalLoader } from '@components/ui/common';

import { store } from '@app/store';
import { AppRouter } from '../navigator';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
      <GlobalLoader />
      <ToastContainer />
    </Provider>
  );
};

export default AppProvider;
