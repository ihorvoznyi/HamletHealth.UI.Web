import Avatar from '../avatar';
import { classes } from './index.tailwind';

const Initials = ({ fullname }: { fullname: string }) => (
  <div className={classes.container}>
    <Avatar fullname={fullname} />
    <p>{fullname}</p>
  </div>
);

export default Initials;