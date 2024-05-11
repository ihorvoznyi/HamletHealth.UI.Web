import type { RootState } from '@shared/model';
import type { Patient } from './types';

export const selectCurrentPatient = ({ patientReducer }: RootState): Patient => {
  return patientReducer.current;
};
