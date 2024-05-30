import PrimaryButton from '@components/ui/controls/button';
import SupporterItem from './supporter-item';

import { classes } from './index.tailwind';

const Supporters = () => {
  return (
    <div className={classes.container}>
      <div className={classes.supportersContainer}></div>

      <PrimaryButton disabled variant="outlined" onClick={() => {}}>
        See supporter&rsquo;s entries
      </PrimaryButton>
    </div>
  );
};

export default Supporters;
