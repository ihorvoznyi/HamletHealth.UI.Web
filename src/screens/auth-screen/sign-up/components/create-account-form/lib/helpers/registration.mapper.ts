import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from '@entities/user';
import { RegistrationFormData } from '../registration-form.interfaces';

export class RegistrationMapper {
  public static mapToCreateUserDto(formData: RegistrationFormData): CreateUserDto {
    return {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phone: this.generateRandomPhoneNumber(),
      userName: this.generateRandomUserName(),
    };
  }

  private static generateRandomPhoneNumber() {
    // Generates a random digit between 0 and 9
    const randomDigit = () => Math.floor(Math.random() * 10);
  
    // Generates a part of the phone number of a given length
    const generatePart = (length: number) => Array.from({ length }, randomDigit).join('');
  
    // Constructs the phone number using the parts
  
    return `+${generatePart(9)}`;
  }

  private static generateRandomUserName() {
    return `user-${uuidv4()}`;
  }
}