import { setCredentials } from '../model';

import { Logger } from '@shared/lib/helpers';

import { UserDto } from '../api';

import { QueryFulfilledType, thunkDispatch } from '@shared/lib/types';
import { Environment } from '@shared/lib/environment';

export const onAuthQueryStartedHandler = async (
  queryFulfilled: QueryFulfilledType<UserDto>, 
  dispatch: thunkDispatch
) => {
  try {
    if (Environment.VITE_ENV_MODE === 'dev') {
      Logger.info('Trying to authorize..');
    }

    const response = await queryFulfilled;

    if (response.data) {
      dispatch(setCredentials(response.data.Data));
    }
  } catch (error) {
    if (Environment.VITE_ENV_MODE === 'dev') {
      Logger.error('Authorization failed', error);
    }
  }
};
