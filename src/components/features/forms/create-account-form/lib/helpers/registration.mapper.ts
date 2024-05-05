import { CreateDoctorDto } from '@app/store/entities/user';
import { RegistrationFormType } from '../../index.types';

export class RegistrationMapper {
  public static mapToCreateUserWithDoctorRoleDto(formData: RegistrationFormType): CreateDoctorDto {
    return {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      role: 1,
    };
  }
}