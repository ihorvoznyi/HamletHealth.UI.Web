import Divider from '@components/ui/common/divider';
import Supporters from '../supporters';

import { classes } from './index.tailwind';
import { useAppSelector } from '@shared/model';
import { selectCurrentPatient } from '@app/store/entities/patient';
import { toNormalCase } from '@utils/text.util';

const TreatmentInfo = () => {
  const { plan } = useAppSelector(selectCurrentPatient);
  const goal = plan?.goal || '-';
  const diagnos = plan?.diagnos || '-';
  const planName = plan?.name || '-';
  const medications = plan?.medications.map(m => `${toNormalCase(m.name)} ${m.dosage}`).join(',') || '-';

  return (
    <div className={classes.container}>
      <div className={classes.columns}>
        <Column title="Goal" text={goal} />
        <Column title="Diagnosis" text={diagnos} />
        <Column title="Prescribed medication" text={medications} />
        <Column title="Treatment plan" text={planName} />
      </div>
      <Divider />
      <Supporters />
    </div>
  );
};

const Column = ({ title, text }: { title: string; text: string; }) => (
  <div className={classes.column}>
    <p className={classes.colTitle}>{title}</p>
    <p className={classes.colText}>{text}</p>
  </div>
);

export default TreatmentInfo;