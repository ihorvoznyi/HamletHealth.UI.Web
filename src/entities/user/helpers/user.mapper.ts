import { ServerResponse } from '@shared/lib/api';
import { UserDto } from '../api/user-api.interfaces';
import { IUser } from '../model';

export class UserResponseMapper {
  static mapLoginResponse(response: ServerResponse<UserDto>): IUser {
    const { id, userName, firstName, lastName, roles } = response.data;
  
    return {
      id,
      userName,
      firstName,
      lastName,
      role: 0,
    };
  }
}
