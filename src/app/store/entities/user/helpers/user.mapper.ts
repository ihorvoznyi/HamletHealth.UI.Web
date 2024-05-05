import { ApiResponse } from '@shared/lib/types';
import { UserDto } from '../api/user-api.interfaces';
import { IUser } from '../model';

export class UserResponseMapper {
  static mapLoginResponse(response: ApiResponse<UserDto>): IUser {
    const { id, userName, firstName, lastName } = response.Data;
  
    return {
      id,
      userName,
      firstName,
      lastName,
      role: 1,
    };
  }
}
