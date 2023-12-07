import Divider from '@components/ui/divider';
import Supporters from '../supporters';

import { classes } from './index.tailwind';

const TreatmentInfo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.columns}>
        <Column title="Goal" text="Decrease anxiety" />
        <Column title="Diagnosis" text="Depressive disorder" />
        <Column title="Prescribed medication" text="Omidon 10mg, Zimax 500mg" />
        <Column title="Treatment plan" text="Cognitive behavioral therapy" />
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