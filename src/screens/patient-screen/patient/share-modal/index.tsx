import { FC, useState } from 'react';

import Input from '@components/ui/input';
import Modal from '@components/ui/modal';
import Select from '@components/ui/select';
import PrimaryButton from '@components/ui/button';
import { PlusSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';

interface PropsType {
  onClose: () => void;
}

const ShareModal: FC<PropsType> = ({ onClose }) => {
  const [assignFields, setAssignFields] = useState([<AssignDoctorFields key={Date.now()} />]);

  const handleAssignDoctor = () => {
    setAssignFields(prev => [...prev, <AssignDoctorFields key={Date.now()} />]);
  };

  const handleShare = () => {
    //
  };
  
  return (
    <Modal onClose={onClose} styles={classes.modal}>
      <h1 className={classes.title}>Share with a doctor</h1>

      <form className={classes.form}>
        {assignFields}
      </form>

      <PrimaryButton type="outlined" onClick={handleAssignDoctor} styles={classes.assignBtn}>
        <PlusSvg color={classes.plusIconColor} />
        Assign one more doctor
      </PrimaryButton>

      {/* TODO: Show modal only when sharing finished successfully */}
      <PrimaryButton onClick={handleShare} styles={classes.shareBtn}>Share</PrimaryButton>
    </Modal>
  );
};

const AssignDoctorFields = () => (
  <div className={classes.fieldContainer}>
    <Select label="Speciality" options={[]} styles={classes.select} />
    <Input label="Email or phone number" styles={classes.input} />
  </div>
);

export default ShareModal;