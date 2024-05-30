import Avatar from '@components/ui/common/avatar';
import PrimaryButton from '@components/ui/controls/button';
import { EditOutlinedSvg } from '@components/ui/svg';

import { useAppSelector } from '@shared/model';
import { selectCurrentPatient } from '@app/store/entities/patient';

import { classes } from './index.tailwind';

const PersonalInfo = () => {
  const patient = useAppSelector(selectCurrentPatient);

  return (
    <div className={classes.container}>
      <Avatar fullname={patient.fullname} className={classes.avatar} />

      <div>
        <div className={classes.nameContainer}>
          <h1 className={classes.title}>{patient.fullname}</h1>
          <button className={classes.editBtn}>
            <EditOutlinedSvg className={classes.editIcon} />
          </button>
        </div>

        <p className={classes.paragraph}>{patient.birthDate},</p>
        <p className={classes.paragraph}>{patient.gender}</p>

        <PrimaryButton disabled variant="outlined" onClick={() => {}} styles={classes.assignBtn}>
          Assign doctor
        </PrimaryButton>
        <PrimaryButton disabled variant="outlined" onClick={() => {}} styles={classes.addBtn}>
          Add treatment plan
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PersonalInfo;
