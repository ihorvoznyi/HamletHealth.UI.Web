import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@app/store';
import { AppRouter } from '../navigator';

import { GlobalLoader } from '@components/ui';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
      <GlobalLoader />
    </Provider>
  );
};

export default AppProvider;
