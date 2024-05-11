/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatFullname } from '@utils/text.util';
import { JournalEntryHelper } from './journal-entry.helper';

import type { Patient, Medication } from '../model/types';
import type { PatientPlanDto } from '@app/store/entities/treatment';
import { formatISOStringAsBirthDate } from '@utils/date.util';
import { getGenderName } from '@utils/gender.util';

export const mapPatientPlanToPatient = (patientPlan: PatientPlanDto): Patient => {
  const { userDto: user, plan } = patientPlan;

  return {
    id: user.id,
    fullname: formatFullname(user.firstName, user.lastName),
    firstName: user.firstName,
    lastName: user.lastName,
    gender: getGenderName(user.gender),
    birthDate: formatISOStringAsBirthDate(user.birthDate),
    plan: plan ? {
      id: plan.id,
      name: plan.name,
      goal: '',
      diagnos: user.diagnos,
      medications: plan?.treatmentPlanItems.reduce((acc: Medication[], item) => {
        item.medications.forEach(medication => {
          if (acc.find(m => m.id === medication.id)) {
            acc.push(medication);
          }
        });
        return acc;
      }, []) ?? []
    } : null,
    journalEntries: JournalEntryHelper.from(patientPlan)
  };
};
