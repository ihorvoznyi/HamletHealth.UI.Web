import { Controller } from 'react-hook-form';

import { Input, Select } from '@components/ui';

import { useRegister } from './lib/hooks';

import { classes } from './index.tailwind';

const CreateAccountForm = () => {
	const { register, handleSubmit, control, errors } = useRegister();

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<Input
				register={register('firstName')}
				label="First name"
				error={errors.firstName?.message}
			/>
			<Input register={register('lastName')} label="Last name" error={errors.lastName?.message} />
			<Input
				register={register('nationalProviderIdentifier')}
				label="National Provided Identifier"
				error={errors.nationalProviderIdentifier?.message}
			/>

			<Controller
				name={'specialty'}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Select value={value} onChange={onChange} label="Your speciality" options={options} />
				)}
			/>

			<Input
				register={register('email')}
				styles={classes.gridWideInput}
				label="Email"
				error={errors.email?.message}
			/>

			<Controller
				name="password"
				control={control}
				render={() => (
					<Input
						type="password"
						label="Create password"
						register={register('password')}
						error={errors.password?.message}
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
						error={errors.repeatedPassword?.message}
					/>
				)}
			/>

			<button type="submit" className={classes.createBtn}>
				Create Account
			</button>
		</form>
	);
};

const options = [
	{
		label: 'Clinical Psychologist',
		value: 'clinical-psychologist',
	},
	{
		label: 'Health Psychologist',
		value: 'health-psychologist',
	},
	{
		label: 'Neuropsychologist',
		value: 'neuropsychologist',
	},
];

export default CreateAccountForm;
