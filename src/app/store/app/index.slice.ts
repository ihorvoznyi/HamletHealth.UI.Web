import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAppState } from './index.interfaces';

export const initialState: IAppState = {
  isLoading: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setGlobalLoader: (state: IAppState, { payload }: PayloadAction<boolean>) => {
      if (state.isLoading === payload) {
        return;
      }

      state.isLoading = payload;
    }
  },
});

export const appReducer = appSlice.reducer;
export const { setGlobalLoader } = appSlice.actions;