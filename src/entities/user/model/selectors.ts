import { RootState } from '@shared/model/interfaces';

export const selectIsAuth = (state: RootState) => state.userReducer.isAuth;
