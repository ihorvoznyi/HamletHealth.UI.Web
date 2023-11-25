import Search from '@components/ui/search';

import { classes } from './index.tailwind';
import { DIAGNOSIS } from '../lib/diagnosis.constants';
import { classes as commonClasses } from '@screens/patient/add-patient/stages/add-treatment-stage/index.tailwind';

const Diagnosis = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h4 className={commonClasses.title}>Diagnosis</h4>
        <p className={commonClasses.subtitle}>All diagnosis</p>
      </div>

      <div>
        <Search />
        <ul className={commonClasses.list}>
          {DIAGNOSIS.map(diagnos => (
              <li 
                key={diagnos.name}
                className={classes.item}>{diagnos.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Diagnosis;