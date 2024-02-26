import { GenderEnum } from '@shared/lib/types';

export interface FindPatientDto {
  lastName: string;
  firstName: string;
  phoneOrEmail: string;
}

export interface AddPatientDto {
  phone?: string;
  email?: string;
  lastName: string;
  firstName: string;
  password: string;
  birthDate?: string;
  gender?: number | null;
  role: 0 | 1;
}