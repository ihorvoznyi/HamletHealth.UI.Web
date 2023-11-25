import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@app/store';
import { AppRouter } from '../navigator';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  );
};

export default AppProvider;
