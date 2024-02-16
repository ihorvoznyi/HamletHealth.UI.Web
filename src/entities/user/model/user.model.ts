import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserDto } from '../api';

import { AuthHelper } from '@shared/lib/helpers';

import { IUser, IUserState } from './interfaces';

const initialState: IUserState = {
  user: {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    role: 0
  },
  error: null,
  isAuth: !!localStorage.getItem('ACCESS_TOKEN_KEY'),
  accessToken: localStorage.getItem('ACCESS_TOKEN_KEY') ?? ''
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setCredentials: (state, { payload }: PayloadAction<UserDto>) => {
        const { token, ...user } = payload;

        state.isAuth = true;
        state.user = {
          ...user,
          role: 0,
        };

        state.accessToken = token;
        AuthHelper.setToken(token);

        state.error = null;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = {} as IUser;
      AuthHelper.clearStorage();
    },
    setUserError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    }
  },
});

export const userReducer = userSlice.reducer;
export const { setCredentials, setAuth, logout } = userSlice.actions;
