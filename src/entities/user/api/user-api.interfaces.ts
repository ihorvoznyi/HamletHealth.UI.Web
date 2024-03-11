export type Gender   = 0 | 1;
export type UserRole = 0 | 1 | 2;

export interface CreateUserDto {
  userName:   string;
  firstName:  string;
  lastName:   string;
  email:      string;
  phone:      string;
  password:   string;
  role?:      0 | 1;
}

export interface LoginDto {
  email:    string;
  password: string;
}

export interface UserDto {
  id:        string; //
  firstName: string; //
  lastName:  string; // 
  userName:  string; //
  token:     string;
  roles:     UserRole[]; //
}
