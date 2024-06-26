import { Controller } from 'react-hook-form';

import { Input, Select } from '@components/ui/controls';

import { useAddPatient } from './lib/hooks';

import { GENDER_OPTIONS } from './lib/constants';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const AddPatientForm = () => {
	const { register, errors, control, submit, watch, isValid } = useAddPatient();

	return (
		<form className={classes.container} onSubmit={submit} autoComplete="off">
			<Input
				register={register('phoneOrEmail')}
				label="Email or phone number"
				watchValue={watch('phoneOrEmail')}
				styles={classes.wideInput}
				error={errors.phoneOrEmail?.message}
			/>
			<Input
				register={register('firstName')}
				label="First name"
				watchValue={watch('firstName')}
				error={errors.firstName?.message}
			/>
			<Input
				register={register('lastName')}
				label="Last name"
				watchValue={watch('lastName')}
				error={errors.lastName?.message}
			/>
			<Input
				register={register('birthDate')}
				type="date"
				label="Date of birth"
				watchValue={watch('birthDate')}
				error={errors.birthDate?.message}
			/>

			<Controller
				name="gender"
				control={control}
				render={({ field: { value, onChange } }) => {
					const selectValue = (value ?? watch('gender')) as unknown as string;

					return (
						<Select
							label="Gender"
							options={GENDER_OPTIONS}
							value={selectValue}
							onChange={onChange}
							error={errors.gender?.message}
						/>
					);
				}}
			/>

			<div className={classes.btnContainer}>
				<button
					type="submit"
					className={cn(classes.btn, !isValid && classes.disabled)}
					disabled={!isValid}
				>
					Proceed
				</button>
			</div>
		</form>
	);
};

export default AddPatientForm;
