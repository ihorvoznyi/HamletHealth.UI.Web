import CommitmentRange from './components/commitment-range';
import CommitmentHeader from './components/commitment-header';

import { useAppSelector } from '@shared/model';
import { selectPatientCommitments } from '@app/store/entities/patient';

import { classes } from './index.tailwind';

const Commitments = () => {
  const commitments = useAppSelector(selectPatientCommitments);

  return (
    <div className={classes.container}>
      {commitments.map(({ id, activity, data }) => (
        <div key={id} className={classes.scrollContainer}>
          <div className={classes.card}>
            <CommitmentHeader activity={activity} data={data} />
            <CommitmentRange data={data} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Commitments;
