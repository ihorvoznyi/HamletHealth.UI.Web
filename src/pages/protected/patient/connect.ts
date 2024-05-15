import { patientActions } from '@app/store/entities/patient';
import { mapPatientPlanToPatient } from '@app/store/entities/patient/helpers/patient.mapper';
import { Patient } from '@app/store/entities/patient/model/types';
import { useGetPatientsPlansQuery } from '@app/store/entities/treatment';
import { useAppDispatch } from '@shared/model';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const useConnect = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { data: patients = [], isLoading: isPatientLoading } = useGetPatientsPlansQuery();

  const isLoading = isPatientLoading;

  const patient: Patient | undefined = useMemo(() => {
    const exist = patients.find(p => p.userDto.id === params.id);
    return exist ? mapPatientPlanToPatient(exist) : exist;
  }, [patients]);

  useEffect(() => {
    if (patient) {
      dispatch(patientActions.setCurrentPatient(patient));
      dispatch(patientActions.setKeyHealthIndicator(patient.keyHealthIndicators[0]?.id ?? ''));
    }
  }, [patient]);

  return { patient, isLoading };
};