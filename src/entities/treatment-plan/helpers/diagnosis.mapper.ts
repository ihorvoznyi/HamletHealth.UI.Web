import { IActivity, IDiagnosisItemDto } from '../api';
import { ActivityStateType, IDiagnosisStateType } from '../models';

export class DiagnosisMapper {
  public static mapToDiagnosisStateModel(diagnosis: IDiagnosisItemDto[]): IDiagnosisStateType[] {
    return diagnosis.map(item => ({
      id: item.id,
      name: item.name,
      recommendedActivities: this.mapToActivitiesStateModel(item.recommendedActivities),
    }));
  }

  private static mapToActivitiesStateModel(activities: IActivity[]): ActivityStateType[] {
    return activities.map(item => ({
      id: item.id,
      icon: item.icon,
      name: item.name,
      category: item.category,
    }));
  }
}