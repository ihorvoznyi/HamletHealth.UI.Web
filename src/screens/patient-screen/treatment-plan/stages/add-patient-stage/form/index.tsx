import { Controller } from 'react-hook-form';

import { Input, Select } from '@components/ui';

import { useAddPatient } from './lib/hooks';

import { GENDER_OPTIONS } from './lib/constants';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { useAppDispatch, useAppSelector } from '@shared/model';
import { selectAddedPatientId, treatmentPlanActions } from '@entities/treatment-plan';

const FillPatientForm = () => {
  const dispatch = useAppDispatch();
  const { register, errors, control, submit, isValid } = useAddPatient();
  const addedPatientId = useAppSelector(selectAddedPatientId);

  const handleChangeStage = () => {
    dispatch(treatmentPlanActions.setCurrentStage('treatmentPlan'));
  };
  
  return (
    <form className={classes.container} onSubmit={submit} autoComplete='off'>
      <Input 
        register={register('emailOrPhoneNumber')} 
        label="Email or phone number" 
        styles={classes.wideInput} 
        error={errors.emailOrPhoneNumber?.message}
      />
      <Input register={register('firstName')} label="First name" error={errors.firstName?.message} />
      <Input register={register('lastName')} label="Last name" error={errors.lastName?.message} />
      <Input 
        register={register('birthDate')} 
        type="date"
        label="Date of birth" 
        error={errors.birthDate?.message} 
      />
      
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
        {addedPatientId?.length 
          ? <button className={classes.btn} onClick={handleChangeStage}>Move back</button>
          : (
            <button         
              type="submit" 
              className={cn(classes.btn, !isValid && classes.disabled)} 
              disabled={!isValid}
            >
              Submit
            </button>
          )}
      </div>
    </form>
  );
};

export default FillPatientForm;