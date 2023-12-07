import TreatmentItem from './treatment-item';

import { classes } from './index.tailwind';
import { treatmentList } from './index.constants';
import { classes as commonClasses } from '../index.tailwind';

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
  return treatmentList.length ? (
    <ul className={classes.list}>
      {treatmentList.map(item => <TreatmentItem key={item.text} type={item.type} text={item.text} />)}
    </ul>
  ) : (
    <div className={classes.emptyMessage.container}>
      <p className={classes.emptyMessage.text}>Empty</p> 
    </div>
  );
};

export default Treatment;
