export type Gender = 0 | 1;
export type UserRole = 0 | 1 | 2;

export interface CreateUserBase {
	role: 0 | 1 | 2;
	userName?: string;
	firstName: string;
	lastName: string;
	password: string;
	email?: string;
	phone?: string;
}

export interface UserDto {
	id: string;
	firstName: string;
	lastName: string;
	userName: string;
	token: string;
	roles: UserRole[];
}

export interface CreateDoctorDto extends CreateUserBase {
	role: 1;
}

export interface CreatePatientDto extends CreateUserBase {
	role: 0;
}

export interface LoginDto {
	email: string;
	password: string;
	role: 1;
}

export interface AddPatientDto {
	id: string;
}

export interface FindPatientDto {
  lastName: string;
  firstName: string;
  phoneOrEmail: string;
}
