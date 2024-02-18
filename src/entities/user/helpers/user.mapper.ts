import { IServerResponse } from '@shared/lib/types';
import { UserDto } from '../api/user-api.interfaces';
import { IUser } from '../model';

export class UserResponseMapper {
  static mapLoginResponse(response: IServerResponse<UserDto>): IUser {
    const { id, userName, firstName, lastName, roles } = response.Data;
  
    return {
      id,
      userName,
      firstName,
      lastName,
      role: 0,
    };
  }
}
