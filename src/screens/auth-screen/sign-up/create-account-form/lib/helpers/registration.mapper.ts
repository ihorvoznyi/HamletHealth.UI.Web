import { CreateUserDto } from '@entities/user';

import { RegistrationFormType } from '../../index.types';

export class RegistrationMapper {
  public static mapToCreateUserDto(formData: RegistrationFormType): CreateUserDto {
    return {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phone: '',
      userName: '',
    };
  }
}