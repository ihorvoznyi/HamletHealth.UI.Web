import { useForm } from 'react-hook-form';
import { bindActionCreators } from '@reduxjs/toolkit';

import { options } from '../schema';

import { useLoading } from '@hooks/useLoading';
import { useAppDispatch } from '@shared/model';
import { useFindAndAddPatientMutation } from '@entities/user';

import { treatmentPlanActions } from '@entities/treatment-plan';

import { AddPatientFormType } from '../types';

export const useAddPatient = () => {
	const { setGlobalLoader } = useLoading();
	const [findAndAddAsync] = useFindAndAddPatientMutation();

	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<AddPatientFormType>(options);
	const dispatch = useAppDispatch();
	const { setCurrentStage, setAddPatientStageData } = bindActionCreators(
		treatmentPlanActions,
		dispatch
	);

	const submit = async (data: AddPatientFormType) => {
		setGlobalLoader(true);

		findAndAddAsync({
			firstName: data.firstName,
			lastName: data.lastName,
			phoneOrEmail: data.emailOrPhoneNumber,
		})
			.then(() => {
				setAddPatientStageData(data);
				setCurrentStage('treatmentPlan');
			})
			.finally(() => setGlobalLoader(false));
	};

	return {
		register,
		control,
		errors,
		isValid,
		submit: handleSubmit(submit),
	};
};
