import React, { useState } from 'react';
import { Control, Controller, FieldValues, UseFormRegisterReturn, useForm } from 'react-hook-form';

import { Input } from '@components/ui';
import Modal from '@components/ui/modal';
import Select from '@components/ui/select';
import PrimaryButton from '@components/ui/button';
import { PlusSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';

interface PropsType {
	onClose: () => void;
}

const ShareModal: React.FC<PropsType> = ({ onClose }) => {
	const { register, control } = useForm();
	const [assignFields, setAssignFields] = useState([
		<AssignDoctorFields key={Date.now()} register={register('')} control={control} />,
	]);

	const handleAssignDoctor = () => {
		setAssignFields(prev => {
			const field = (
				<AssignDoctorFields key={Date.now()} register={register('')} control={control} />
			);
			return [...prev, field];
		});
	};

	const handleShare = () => {
		//
	};

	return (
		<Modal onClose={onClose} styles={classes.modal}>
			<h1 className={classes.title}>Share with a doctor</h1>

			<form className={classes.form}>{assignFields}</form>

			<PrimaryButton variant="outlined" onClick={handleAssignDoctor} styles={classes.assignBtn}>
				<PlusSvg color={classes.plusIconColor} />
				Assign one more doctor
			</PrimaryButton>

			{/* TODO: Show modal only when sharing finished successfully */}
			<PrimaryButton onClick={handleShare} styles={classes.shareBtn}>
				Share
			</PrimaryButton>
		</Modal>
	);
};

interface AssignDoctorFieldProps {
	register: UseFormRegisterReturn;
	control: Control<FieldValues>;
}

const AssignDoctorFields: React.FC<AssignDoctorFieldProps> = ({ register, control }) => (
	<div className={classes.fieldContainer}>
		<Controller
			name={'specialty'}
			control={control}
			render={({ field: { onChange, value } }) => (
				<Select
					value={value}
					onChange={onChange}
					label="Speciality"
					options={[]}
					styles={classes.select}
				/>
			)}
		/>

		<Input register={register} label="Email or phone number" styles={classes.input} />
	</div>
);

export default ShareModal;
