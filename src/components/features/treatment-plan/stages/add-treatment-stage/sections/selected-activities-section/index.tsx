import TreatmentItem from './treatment-item';

import { classes } from './index.tailwind';
import { classes as commonClasses } from '../../index.tailwind';
import { useAppSelector } from '@shared/model';
import { selectSelectedActivities } from '@app/store/entities/patient';

const Treatment = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h4 className={commonClasses.title}>List for treatment plan</h4>
        <p className={commonClasses.subtitle}>All activity & medicine you&rsquo;ve selected</p>
      </div>

      <TreatmentList />
    </div>
  );
};

const TreatmentList = () => {
  const selectedActivities = useAppSelector(selectSelectedActivities);
  return selectedActivities.length ? (
    <ul className={classes.list}>
      {selectedActivities.map(({ treatment }) => (
        <TreatmentItem 
          key={treatment.id}
          id={treatment.id}
          category={treatment.category} 
          text={treatment.name} 
          icon={treatment.icon} 
        />
      ))}
    </ul>
  ) : (
    <div className={classes.emptyMessage.container}>
      <p className={classes.emptyMessage.text}>Empty</p> 
    </div>
  );
};

export default Treatment;
