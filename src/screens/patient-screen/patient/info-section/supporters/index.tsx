import PrimaryButton from '@components/ui/button';
import SupporterItem from './supporter-item';

import { classes } from './index.tailwind';

const Supporters = () => {
  return (
    <div className={classes.container}>
      <div className={classes.supportersContainer}>
        <p className={classes.grayParagraph}>Supporters</p>

        {/* List of supporters */}
        <div className={classes.list}>
          <SupporterItem fullname="Mary Hug" text="Mother" />
        </div>
      </div>

      <PrimaryButton type="outlined" onClick={() => {}}>
        See supporter&rsquo;s entries
      </PrimaryButton>
    </div>
  );
};

export default Supporters;