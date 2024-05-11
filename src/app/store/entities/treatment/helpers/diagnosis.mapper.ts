import { IActivity, IDiagnosisItemDto } from '../api';
import { TreatmentStateType, IDiagnosisStateType } from '../models';

export class DiagnosisMapper {
  public static mapToDiagnosisStateModel(diagnosis: IDiagnosisItemDto[]): IDiagnosisStateType[] {
    return diagnosis.map(item => ({
      id: item.id,
      name: item.name,
      code: item.code,
      recommendedActivities: this.mapToActivitiesStateModel(item.recommendedActivities),
    }));
  }

  private static mapToActivitiesStateModel(activities: IActivity[]): TreatmentStateType[] {
    return activities.map(item => ({
      id: item.id,
      icon: item.icon,
      name: item.name,
      category: item.category,
    }));
  }
}