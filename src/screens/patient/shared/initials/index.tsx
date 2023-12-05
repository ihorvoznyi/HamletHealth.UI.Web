import { classes } from './index.tailwind';
import { retrieveInitials } from '../patient.helpers';

const Initials = ({ fullname }: { fullname: string }) => (
  <div className={classes.container}>
    <p className={classes.initials}>{retrieveInitials(fullname)}</p>
    <p>{fullname}</p>
  </div>
);

export default Initials;