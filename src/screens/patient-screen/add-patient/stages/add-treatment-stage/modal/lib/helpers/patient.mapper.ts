import { AddPatientDto, IPatientStageData } from '@entities/treatment-plan';

export class PatientMapper {
  public static mapToAddPatientDto(model: IPatientStageData): AddPatientDto {
    const emailOrPhoneNumber = {
      email: model.emailOrPhoneNumber.includes('@') ? model.emailOrPhoneNumber : undefined,
      phone: !model.emailOrPhoneNumber.includes('@') ? model.emailOrPhoneNumber : undefined,
    };

    return {
      firstName: model.firstName,
      lastName: model.lastName,
      password: 'pass',
      role: 0,
      ...emailOrPhoneNumber,
    };
  }
}