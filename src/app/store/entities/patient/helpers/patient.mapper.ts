/* eslint-disable @typescript-eslint/no-explicit-any */
import { getGenderName } from '@utils/gender.util';
import { formatFullname } from '@utils/text.util';
import { JournalEntryHelper, getKeyHealthIndicators } from './journal-entry.helper';
import { formatISOStringAsBirthDate } from '@utils/date.util';

import type { Patient, Medication, Activity } from '../model/types';
import type { PatientPlanDto } from '@app/store/entities/treatment';

export const mapPatientPlanToPatient = (patientPlan: PatientPlanDto): Patient => {
  const { userDto: user, plan } = patientPlan;

  const journalEntries = JournalEntryHelper.from(patientPlan);
  const keyHealthIndicators = getKeyHealthIndicators(journalEntries);

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
          if (!acc.find(m => m.id === medication.id)) {
            acc.push(medication);
          }
        });
        return acc;
      }, []) ?? [],
      activities: plan.treatmentPlanItems.reduce((acc: Activity[], item) => {
        item.activities.forEach(activity => {
          if (!acc.find(a => a.id === activity.id)) {
            acc.push({
              id: activity.id,
              icon: activity.icon,
              name: activity.name,
            });
          }
          return acc;
        });

        return acc;
      }, []),
    } : null,
    journalEntries,
    keyHealthIndicators,
  };
};
