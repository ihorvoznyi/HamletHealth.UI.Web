import Divider from '@components/ui/divider';
import Breadcrumb from '../breadcrumb';
import PersonalInfo from './personal-info';
import TreatmentInfo from './treatment-info';

import { classes } from './index.tailwind';

const InfoSection = () => {
  return (
    <section className={classes.container}>
      <Breadcrumb />

      <div className={classes.content}>
        <PersonalInfo />
        <Divider direction="vertical" className={classes.divider} />
        <TreatmentInfo />
      </div>
    </section>
  );
};

export default InfoSection;