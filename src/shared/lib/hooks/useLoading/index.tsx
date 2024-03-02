import { setGlobalLoader } from '@app/store';

import { useState } from 'react';
import { useActions } from '../useActions';

export const useLoading = () => {
  const [isLoading, setLoading] = useState(false);
  const [setGlobalLoaderBounded] = useActions([setGlobalLoader]);

  return { isLoading, setLoading, setGlobalLoading: setGlobalLoaderBounded };
};
