import { Environment } from '@shared/lib/environment';

import { setCredentials } from '../model';

import { Logger } from '@shared/lib/helpers';

import { UserDto } from '../api';
import { IServerResponse } from '@shared/lib/types';
import { queryFulfilledType, thunkDispatch } from '@shared/lib/types';

export const onAuthQueryStartedHandler = async (
  queryFulfilled: queryFulfilledType<IServerResponse<UserDto>>, 
  dispatch: thunkDispatch
) => {
  try {
    Logger.info('Trying to authorize');
    const response = await queryFulfilled;
    Logger.info(JSON.stringify(response));

    if (response.data) {
      dispatch(setCredentials(response.data.Data));
    }
  } catch (error) {
    if (Environment.VITE_ENV_MODE === 'dev') {
      Logger.error('Authorization failed', error);
    }
  }
};
