import TreatmentItem from './treatment-item';

import { classes } from './index.tailwind';
import { classes as commonClasses } from '@screens/patient/add-patient/add-treatment-stage/index.tailwind';

// TODO: Rename
const TreatmentList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h4 className={commonClasses.title}>List for treatment plan</h4>
        <p className={commonClasses.subtitle}>All activity & medicine you&rsquo;ve selected</p>
      </div>

      <ul className={classes.list}>
        <TreatmentItem type='sleep' text="Have a sleep" />
        <TreatmentItem type='movie' text="Watch a movie" />
        <TreatmentItem type='medicine' text="Omidon 10mg" />
      </ul> 
    </div>
  );
};

export default TreatmentList;
