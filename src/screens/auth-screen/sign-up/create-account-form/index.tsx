import { Controller } from 'react-hook-form';

import { Input, Select } from '@components/ui';

import { useRegister } from './lib/hooks';

import { classes } from './index.tailwind';

const CreateAccountForm = () => {
  const { register, handleSubmit, control } = useRegister();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input register={register('firstName')} label="First name" />
      <Input register={register('lastName')} label="Last name" />
      <Input register={register('nationalProviderIdentifier')} label="National Provided Identifier" />

      <Controller 
        name={'specialty'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select 
            value={value}
            onChange={onChange}
            label="Your speciality"
            options={options} 
          />
        )}      
      />

      <Input register={register('email')} styles={classes.gridWideInput} label="Email" />

      <Controller 
        name="password"
        control={control}
        render={() => (
          <Input 
            type="password" 
            label="Create password"
            register={register('password')} 
          />
        )}
      />

      <Controller 
        name="repeatedPassword"
        control={control}
        render={() => (
          <Input 
            type="password" 
            label="Confirm password"
            register={register('repeatedPassword')} 
          />
        )}
      />

      <button type="submit" className={classes.createBtn}>Create Account</button>
    </form>
  );
};

const options = [
  {
    label: 'Clinical Psychologist',
    value: 'clinical-psychologist'
  },
  {
    label: 'Health Psychologist',
    value: 'health-psychologist'
  },
  {
    label: 'Neuropsychologist',
    value: 'neuropsychologist',
  }
];

export default CreateAccountForm;