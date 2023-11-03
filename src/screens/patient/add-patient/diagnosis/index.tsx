import Search from '@components/ui/search';
import { classes } from './index.tailwind';
import { DIAGNOSIS } from './lib/diagnosis.constants';

const Diagnosis = () => {
  return (
    <div className="flex-[33%] text-left font-roboto-400">
      <div className="mb-[20px]">
        <h4 className="text-[20px] mb-[4px] font-roboto-500 leading-[24px] tracking-[0.15px]">Diagnosis</h4>
        <p className="text-body-medium">All diagnosis</p>
      </div>

      <div>
        <Search />

        <ul className={classes.list}>
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