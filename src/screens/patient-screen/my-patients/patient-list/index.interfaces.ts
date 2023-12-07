// TODO: intergrate with BE
export interface IPatientItem {
  id: string;
  fullname: string;
  birthDate: string;
  gender: 'male' | 'female';
  healthProblem: string;
}

export interface IPatientSection {
  section: string;
  data: IPatientItem[];
}