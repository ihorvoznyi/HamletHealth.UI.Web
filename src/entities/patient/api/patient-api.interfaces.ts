import { Gender } from '@shared/lib/enums';

export interface IPatient {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  email?: string;
  phone?: string;
  gender?: Gender;
}

export interface IDashboardStats {
  patientId: string[];
  patientsCount: number;
  accountsSetup: number;
  entriesTpReview: number;
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
  userId?: string;
  name: string;
  code: string;
  dosage: string;
  comment: string;
}

export interface TreatmentPlanItem {
  diagnosId: string;
  startDate: Date;
  endDate?: Date;
  medications: MedicationItem[],
  activityIds: string[],
}

export interface CreateTreatmentPlanDto {
  userId?: string;
  name: string;
  descritpion: string;
  startDate: Date;
  endDate?: Date;
  treatmentPlanItems: TreatmentPlanItem[],
}