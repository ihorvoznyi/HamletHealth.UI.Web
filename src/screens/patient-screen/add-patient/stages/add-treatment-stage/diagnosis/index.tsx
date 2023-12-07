import Search from '@components/ui/search';

import { DIAGNOSIS } from '../lib/diagnosis.constants';
import { classes } from './index.tailwind';
import { classes as commonClasses } from '../index.tailwind';

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