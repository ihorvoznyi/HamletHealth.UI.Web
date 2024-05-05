import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Auth from '@pages/index';
import { GlobalLoader } from '@components/ui/common';

import { store } from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalLoader />
      <Auth />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);

export default App;
