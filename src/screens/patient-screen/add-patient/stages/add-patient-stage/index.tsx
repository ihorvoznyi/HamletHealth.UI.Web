import { FC, useEffect } from 'react';
import { shallowEqual } from 'react-redux';

import Input from '@components/ui/input';
import Select from '@components/ui/select';
import Button from '@components/ui/button';

import { useActions } from '@hooks/useActions';
import { useAppSelector } from '@shared/model';

import { selectStageStatuses, setCurrentStage, setStageStatus } from '../../stage-bar/lib';

import { classes } from './index.tailwind';

interface PropsType {
  onProcess: () => void;
}

/**
 * [ ] Add form validation (integrate with react-hook-form)
 */
const AddPatientStage: FC<PropsType> = ({ onProcess }) => {
  const [boundSetStageStatus, boundSetCurrentPage] = useActions([setStageStatus, setCurrentStage]);
  const { patientStatus } = useAppSelector(selectStageStatuses, shallowEqual);

  const handleProcceed = () => {
    onProcess();
  };

  useEffect(() => {
    if (patientStatus !== 'filled') {
      boundSetStageStatus({ stage: 'patientStatus', status: 'checked' });
    }
    
    boundSetCurrentPage('patient');
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add patient</h2>
      <p className={classes.subtitle}>Fill in the info to create an account for the patient.</p>

      <form className={classes.form}>
        <Input label="First and last name" />
        <Select label="Diagnosis (according to DSM)" options={[]} />
        <Input label="Email or phone number" />
        <Select label="Prescribed medication" options={[]} />
        <Input label="Date of birth" />
        <Input label="Describe the treatment plan" />
        <Select label="Gender" options={[]} />
      </form>

      <Button styles={classes.btn} onClick={handleProcceed}>
        Proceed
      </Button>
    </div>
  );
};

export default AddPatientStage;
