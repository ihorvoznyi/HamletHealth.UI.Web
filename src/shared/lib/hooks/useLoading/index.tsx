import { useState } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { appActions } from '@app/store';

import { useAppDispatch } from '@shared/model';

export const useLoading = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);
  const { setGlobalLoader } = bindActionCreators(appActions, dispatch);

  return { isLoading, setLoading, setGlobalLoader };
};
