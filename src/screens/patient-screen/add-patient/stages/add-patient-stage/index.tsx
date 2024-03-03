import { FC, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { Controller } from 'react-hook-form';

import Input from '@components/ui/input';
import Select from '@components/ui/select';

import { useAddPatient } from './lib';
import { useActions } from '@hooks/useActions';
import { useAppSelector } from '@shared/model';

import { selectStageStatuses, setCurrentStage, setStageStatus } from '../../stage-bar/lib';

import { GENDER_OPTIONS } from './lib/constants';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface PropsType {
  onProcess: () => void;
}

const AddPatientStage: FC<PropsType> = ({ onProcess }) => {
  const { register, errors, control, submit, isValid } = useAddPatient({ processStage: onProcess });
  const [boundSetStageStatus, boundSetCurrentPage] = useActions([setStageStatus, setCurrentStage]);
  const { patientStatus } = useAppSelector(selectStageStatuses, shallowEqual);

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

      <form className={classes.form} onSubmit={submit} autoComplete='off'>
        <Input 
          register={register('emailOrPhoneNumber')} 
          label="Email or phone number" 
          styles={classes.wideInput} 
          error={errors.emailOrPhoneNumber?.message}
        />
        <Input register={register('firstName')} label="First name" error={errors.firstName?.message} />
        <Input register={register('lastName')} label="Last name" error={errors.lastName?.message} />
        <Input register={register('birthDate')}  label="Date of birth" error={errors.birthDate?.message} />
        
        <Controller
          name="gender"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select 
              label="Gender" 
              options={GENDER_OPTIONS} 
              value={value as unknown as string} 
              onChange={onChange} 
              error={errors.gender?.message} 
            />
          )}
        />

        <div className={classes.btnContainer}>
          <button 
            type="submit" 
            className={cn(classes.btn, !isValid && classes.disabled)} 
            disabled={!isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientStage;
