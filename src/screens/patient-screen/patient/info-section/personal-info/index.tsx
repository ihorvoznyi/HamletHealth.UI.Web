import Button from '@components/ui/button';
import Avatar from '@screens/patient-screen/shared/avatar';
import { EditOutlinedSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';

const PersonalInfo = () => {
  return (
    <div className={classes.container}>
      <Avatar fullname={'Amanda Hug'} className={classes.avatar} />

      <div>
        <div className={classes.nameContainer}>
          <h1 className={classes.title}>{'Amanda Hug'}</h1>
          <button className={classes.editBtn}>
            <EditOutlinedSvg className={classes.editIcon} />
          </button>
        </div>
        
        <p className={classes.paragraph}>{'Dec 20, 1985 (36 y.o.)'},</p>
        <p className={classes.paragraph}>{'female'}</p>
        <Button type="outlined" onClick={() => {}} styles={classes.assignBtn}>Assign doctor</Button>
        <Button type="outlined" onClick={() => {}} styles={classes.addBtn}>Add treatment plan</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;