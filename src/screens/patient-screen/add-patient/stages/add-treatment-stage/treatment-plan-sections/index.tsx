import { PropsWithChildren } from 'react';
import ActivitiesMedicine from '../activities';
import Diagnosis from '../diagnosis';
import Treatments from '../treatment-plan-list';

import { classes } from './index.tailwind';

const TreatmentPlan = ({ children }: PropsWithChildren) => (
  <div className={classes.container}>{children}</div>
);

TreatmentPlan.Diagnosis = Diagnosis;
TreatmentPlan.ActivitiesMedicine = ActivitiesMedicine;
TreatmentPlan.Treatments = Treatments;

export default TreatmentPlan;