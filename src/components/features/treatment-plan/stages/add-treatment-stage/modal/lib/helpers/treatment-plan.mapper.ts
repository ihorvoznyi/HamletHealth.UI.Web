import { 
  CreateTreatmentPlanDto, 
  IDiagnosisStateType, 
  MedicationItem, 
  TreatmentPlanDataType, 
} from '@app/store/entities/treatment';

export class TreatmentPlanMapper {
  public static mapToCreateTreatmentPlanDto(model: TreatmentPlanDataType): CreateTreatmentPlanDto {
    const groupedDiagnosis = this.groupTreatmentPlanItemsByDiagnosis(model);
    const startDate = new Date();
  
    return {
      userId: model.patientId,
      name: model.name,
      descritpion: model.description,
      startDate,
      treatmentPlanItems: Object.keys(groupedDiagnosis).map(diagnosId => ({
        diagnosId,
        startDate,
        medications: groupedDiagnosis[diagnosId].medications,
        activityIds: groupedDiagnosis[diagnosId].activityIds,
      })),
    };
  }

  private static groupTreatmentPlanItemsByDiagnosis(treatmentPlanData: TreatmentPlanDataType) {
    const groupedByDiagnosis: Record<string, { 
      diagnosis: IDiagnosisStateType; 
      activityIds: string[]; 
      medications: MedicationItem[] 
    }> = {};
    
    treatmentPlanData.treatmentPlanItems.forEach(item => {
      const diagnosId = item.diagnosis.id;
  
      if (!groupedByDiagnosis[diagnosId]) {
        groupedByDiagnosis[diagnosId] = {
          diagnosis: item.diagnosis,
          activityIds: [],
          medications: [],
        };
      }
  
      const diagnosis = groupedByDiagnosis[diagnosId];
  
      if (item.treatment.category === 1) {
        const { code } = diagnosis.diagnosis;
        diagnosis.medications.push({
          userId: treatmentPlanData.patientId,
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