import { RootState } from '@shared/model/interfaces';

export const selectIsAuth = ({ userReducer }: RootState) => userReducer.isAuth;
export const selectUserId = ({ userReducer }: RootState) => userReducer.user.id;