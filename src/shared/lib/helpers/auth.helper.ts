import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { UserDto, setCredentials } from '@entities/user';

import { APP_ROUTES } from '@configs/routes.config';

import { IServerResponse } from '../api';
import { queryFulfilledType, thunkDispatch } from '../types';

export class AuthHelper {
  private static readonly ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

  static setToken(accessToken: string) {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
  }

  static clearStorage() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }
}