import { 
  CreateTreatmentPlanDto, 
  IDiagnosisStateType, 
  MedicationItem, 
  TreatmentPlanDataType, 
} from '@entities/treatment-plan';

export class TreatmentPlanMapper {
  public static mapToCreateTreatmentPlanDto(userId: string, model: TreatmentPlanDataType): CreateTreatmentPlanDto {
    const groupedDiagnosis = this.groupTreatmentPlanItemsByDiagnosis(userId, model);
    const startDate = new Date();
  
    return {
      userId,
      name: model.name,
      descritpion: model.description,
      startDate,
      treatmentPlanItems: Object.keys(groupedDiagnosis).map(diagnosisId => ({
        diagnosisId,
        startDate,
        medications: groupedDiagnosis[diagnosisId].medications,
        activityIds: groupedDiagnosis[diagnosisId].activityIds,
      })),
    };
  }

  private static groupTreatmentPlanItemsByDiagnosis(userId: string, treatmentPlanData: TreatmentPlanDataType) {
    const groupedByDiagnosis: Record<string, { 
      diagnosis: IDiagnosisStateType; 
      activityIds: string[]; 
      medications: MedicationItem[] 
    }> = {};
    
    treatmentPlanData.treatmentPlanItems.forEach(item => {
      const diagnosisId = item.diagnosis.id;
  
      if (!groupedByDiagnosis[diagnosisId]) {
        groupedByDiagnosis[diagnosisId] = {
          diagnosis: item.diagnosis,
          activityIds: [],
          medications: [],
        };
      }
  
      const diagnosis = groupedByDiagnosis[diagnosisId];
  
      if (item.treatment.category === 1) {
        const { code } = diagnosis.diagnosis;
        diagnosis.medications.push({
          userId,
          code,
          name: item.treatment.name,
          dosage: '',
          comment: '',
        });
        return;
      }
  
      diagnosis.activityIds.push(item.treatment.id);
    });
  
    return groupedByDiagnosis;
  }
}