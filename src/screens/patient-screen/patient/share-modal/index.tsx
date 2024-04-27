import React, { useState } from 'react';
import { Control, Controller, FieldValues, UseFormRegisterReturn, useForm } from 'react-hook-form';

import { Modal } from '@components/ui/common';
import { PlusSvg } from '@components/ui/svg';
import { Input, Select, Button } from '@components/ui/controls';

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

			<Button variant="outlined" onClick={handleAssignDoctor} styles={classes.assignBtn}>
				<PlusSvg color={classes.plusIconColor} />
				Assign one more doctor
			</Button>

			{/* TODO: Show modal only when sharing finished successfully */}
			<Button onClick={handleShare} styles={classes.shareBtn}>
				Share
			</Button>
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
