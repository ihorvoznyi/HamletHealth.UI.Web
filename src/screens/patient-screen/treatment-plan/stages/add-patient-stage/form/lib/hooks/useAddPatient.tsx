import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { bindActionCreators } from '@reduxjs/toolkit';

import { options } from '../schema';

import { useLoading } from '@hooks/useLoading';
import { useAppDispatch, useAppSelector } from '@shared/model';
import { useFindPatientMutation, useAddPatientMutation, useCreatePatientMutation } from '@entities/user';

import { selectAddPatientStateData, treatmentPlanActions } from '@entities/treatment-plan';

import { AddPatientFormType } from '../types';
import { ToastHelper } from '@shared/lib/helpers';
import { Role } from '@shared/lib/enums';
import { convertToISOString } from '@utils/date.util';

export const useAddPatient = () => {
	const { setGlobalLoader } = useLoading();
	const [findPatientAsync] = useFindPatientMutation();
	const [createPatientAsync, { isError }] = useCreatePatientMutation();
	const [addPatientAsync] = useAddPatientMutation();
	const { status, data } = useAppSelector(selectAddPatientStateData);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<AddPatientFormType>(options);
	const dispatch = useAppDispatch();
	const { setCurrentStage, setAddPatientStageData, setPatientId } = bindActionCreators(
		treatmentPlanActions,
		dispatch
	);

	const submit = async (data: AddPatientFormType) => {
		const { firstName, lastName, emailOrPhoneNumber, birthDate, gender } = data;

		try {
			setGlobalLoader(true);

			let patientId = await findPatientAsync({
				firstName,
				lastName,
				phoneOrEmail: emailOrPhoneNumber,
			}).unwrap();

			if (!patientId) {
				const newPatientId = await createPatientAsync({
					role: Role.PATIENT,
					email: emailOrPhoneNumber.includes('@') ? emailOrPhoneNumber : undefined,
					phone: !emailOrPhoneNumber.includes('@') ? emailOrPhoneNumber : undefined,
					firstName,
					lastName,
					birthDate: birthDate ? convertToISOString(birthDate) : undefined,
					gender,
					password: 'patient'
				}).unwrap();

				if (isError) {
					const message = `
						Unable to assign ${data.firstName} ${data.lastName} as a doctor's patient. 
						Check details and retry.
					`;
					toast.error(message, { position: 'top-center' });
					return;
				}

				patientId = newPatientId;
			}

			const invitationId = await addPatientAsync({ id: patientId, role: 0 }).unwrap();

			if (!invitationId) {
				const message = `
					Unable to assign ${data.firstName} ${data.lastName} as a doctor's patient. 
					Check details and retry.
				`;
				ToastHelper.error(message);
				return;
			}	

			setPatientId(patientId);
			setAddPatientStageData(data);
			setCurrentStage('treatmentPlan');
		} catch (err) {
			toast.error('Something went wrong. Please try again later.');
		} finally {
			setGlobalLoader(false);
		}
	};

	useEffect(() => {
		if (status === 'filled') {
			options.defaultValues = {...data};
		}
	}, []);

	return {
		register,
		control,
		errors,
		isValid,
		submit: handleSubmit(submit),
	};
};
