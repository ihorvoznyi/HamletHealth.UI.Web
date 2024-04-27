import PrimaryButton from '@components/ui/controls/button';
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
        <PrimaryButton variant="outlined" onClick={() => {}} styles={classes.assignBtn}>Assign doctor</PrimaryButton>
        <PrimaryButton variant="outlined" onClick={() => {}} styles={classes.addBtn}>Add treatment plan</PrimaryButton>
      </div>
    </div>
  );
};

export default PersonalInfo;