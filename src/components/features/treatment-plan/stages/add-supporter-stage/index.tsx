import { Input, Select, Button } from '@components/ui/controls';
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
				<Button variant="outlined" styles={classes.formBtn} onClick={() => {}}>
					<PlusSvg color="#4366C5" />
					Add one more supporter
				</Button>
			</form>

			<div className={classes.btnsContainer}>
				<Button onClick={handleNext} variant="outlined">
					<ArrowLeftSvg />
				</Button>
				<Button onClick={handleNext} styles={classes.saveBtn}>
					Save and finish
				</Button>
			</div>

			<Button onClick={handleNext} variant="outlined" styles={classes.skipBtn}>
				Skip this step
			</Button>
		</div>
	);
};

export default AddSupporterStage;
