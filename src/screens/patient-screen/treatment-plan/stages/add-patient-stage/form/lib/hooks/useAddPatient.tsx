import { useForm } from 'react-hook-form';
import { bindActionCreators } from '@reduxjs/toolkit';

import { options } from '../schema';

import { useLoading } from '@hooks/useLoading';
import { useAppDispatch } from '@shared/model';
import { useFindPatientMutation, useAddPatientMutation } from '@entities/user';

import { treatmentPlanActions } from '@entities/treatment-plan';

import { AddPatientFormType } from '../types';
import { ToastHelper } from '@shared/lib/helpers';

export const useAddPatient = () => {
	const { setGlobalLoader } = useLoading();
	const [findPatientAsync] = useFindPatientMutation();
	const [addPatientAsync] = useAddPatientMutation();

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
		setGlobalLoader(true);

		try {
			const patientId = await findPatientAsync({
				firstName: data.firstName,
				lastName: data.lastName,
				phoneOrEmail: data.emailOrPhoneNumber,
			}).unwrap();

			if (!patientId) {
				ToastHelper.error(`Patient ${data.firstName} ${data.lastName} was not found.`);
				return;
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
		} finally {
			setGlobalLoader(false);
		}
	};

	return {
		register,
		control,
		errors,
		isValid,
		submit: handleSubmit(submit),
	};
};
