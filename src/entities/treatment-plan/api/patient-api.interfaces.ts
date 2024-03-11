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

export interface IActivity {
  id: string;
  icon: string;
  name: string;
  category: number;
  tags: string[];
}

export interface IHealthIndicator {
  id: string;
  name: string;
}

export interface IDiagnosisItemDto {
  id: string;
  name: string;
  code: string;
  recommendedActivities: IActivity[];
  keyHealthIndicators: IHealthIndicator[];
}

export interface MedicationItem {
  userId: string;
  name: string;
  code: string;
  dosage: string;
  comment: string;
}

export interface TreatmentPlanItem {
  diagnosisId: string;
  startDate: Date;
  endDate?: Date;
  medications: MedicationItem[],
  activityIds: string[],
}

export interface CreateTreatmentPlanDto {
  userId: string;
  name: string;
  descritpion: string;
  startDate: Date;
  endDate?: Date;
  treatmentPlanItems: TreatmentPlanItem[],
}