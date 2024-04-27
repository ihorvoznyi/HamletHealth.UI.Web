// TODO: intergrate with BE
export interface IPatientItem {
  id: string;
  fullname: string;
  birthDate: string;
  gender: string;
  healthProblem: string;
}

export interface IPatientSection {
  section: string;
  data: IPatientItem[];
}