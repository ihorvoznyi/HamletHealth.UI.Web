/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from '@shared/model';

type ActionType = ((...params: any[]) => void)[]

export function useActions(actions: ActionType, deps?: any[]): ActionType {
  const dispatch = useAppDispatch();
  return useMemo(
    () => actions.map(action => bindActionCreators(action, dispatch)),
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
