import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import Auth from '@pages/index';
import { GlobalLoader } from '@components/ui/common';

import { store } from '@app/store';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalLoader />
        <Auth />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default AppProvider;
