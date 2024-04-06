import { Input } from '@components/ui';
import Select from '@components/ui/select';
import PrimaryButton from '@components/ui/button';
import { ArrowLeftSvg, PlusSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';
import { Controller, useForm } from 'react-hook-form';

const AddSupporterStage = () => {
	const { register, control } = useForm();

	const handleNext = () => {};

	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Add a supporter</h2>
			<p className={classes.subtitle}>
				Add a person who will help a patient keep track of the mood.
			</p>

			<form className={classes.form}>
				<Controller
					name={'fullName'}
					control={control}
					render={({ field: { onChange, value } }) => (
						<Select
							value={value}
							onChange={onChange}
							label="First and last name"
							options={[]}
						/>
					)}
				/>

				<Controller
					name={'relationship'}
					control={control}
					render={({ field: { onChange, value } }) => (
						<Select
							value={value}
							onChange={onChange}
							label="Relationship"
							options={[]}
						/>
					)}
				/>

				<Input register={register('')} label="Email or phone number" />
				<PrimaryButton variant="outlined" styles={classes.formBtn} onClick={() => {}}>
					<PlusSvg color="#4366C5" />
					Add one more supporter
				</PrimaryButton>
			</form>

			<div className={classes.btnsContainer}>
				<PrimaryButton onClick={handleNext} variant="outlined">
					<ArrowLeftSvg />
				</PrimaryButton>
				<PrimaryButton onClick={handleNext} styles={classes.saveBtn}>
					Save and finish
				</PrimaryButton>
			</div>

			<PrimaryButton onClick={handleNext} variant="outlined" styles={classes.skipBtn}>
				Skip this step
			</PrimaryButton>
		</div>
	);
};

export default AddSupporterStage;
