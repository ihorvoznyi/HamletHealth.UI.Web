import { UserRole } from '../api';

export interface IUserState {
  user:        IUser;
  isAuth:      boolean;
  accessToken: string;
  error:       string | null;
}

export interface IUser {
  id:          string;
  userName:    string;
  firstName:   string;
  lastName:    string;
  role:        UserRole;
}
