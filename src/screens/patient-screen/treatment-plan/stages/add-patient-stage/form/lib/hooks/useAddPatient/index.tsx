import { bindActionCreators } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';

import { useLoading } from '@hooks/useLoading';
import { useAppDispatch, useAppSelector } from '@shared/model';
import { ToastHelper } from '@shared/lib/helpers';
import { Role } from '@shared/lib/enums';
import { Operation, OperationResult } from '@shared/lib/types';
import { UNEXPECTED_ERROR } from '@shared/lib/constants/error-messages';
import {
	useFindPatientMutation,
	useAddPatientMutation,
	useCreatePatientMutation,
} from '@entities/user';
import { selectAddPatientStateData, treatmentPlanActions } from '@entities/treatment-plan';

import { options } from '../../schema';
import { AddPatientFormType } from '../../types';
import { createAssignPatientErrMsg, failedFindOrCreateErrMessage } from './constants';
import { mapFormDataToCreatePatientDto } from './helpers';


export const useAddPatient = () => {
	const { setGlobalLoader } = useLoading();

	const [findPatientAsync] = useFindPatientMutation();
	const [addPatientAsync] = useAddPatientMutation();
	const [createPatientAsync] = useCreatePatientMutation();

	const dispatch = useAppDispatch();
	const { data: patientDefaultValues } = useAppSelector(selectAddPatientStateData);
	const actions = bindActionCreators(treatmentPlanActions, dispatch);

	options.defaultValues = {...patientDefaultValues};

	const {
		register,
		control,
		watch,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<AddPatientFormType>(options);

	const submit = async (data: AddPatientFormType) => {
		const { firstName, lastName } = data;

		setGlobalLoader(true);

		try {
			const findOrCreateResult = await findOrCreatePatient(data);

			if (!findOrCreateResult.isSuccess) {
				ToastHelper.error(findOrCreateResult.message);
				return;
			}

			const { data: patientId } = findOrCreateResult;
			const isAssigned = await tryAssignPatientToDoctor(patientId);

			if (!isAssigned) {
				ToastHelper.error(createAssignPatientErrMsg(firstName, lastName));
				return;
			}

			actions.setPatientId(patientId);
			actions.setAddPatientStageData(data);
			actions.setCurrentStage('treatmentPlan');
		} catch (err) {
			ToastHelper.error(UNEXPECTED_ERROR);
		} finally {
			setGlobalLoader(false);
		}
	};

	const findOrCreatePatient = async (
		data: AddPatientFormType
	): Promise<OperationResult<string>> => {
		const { firstName, lastName, phoneOrEmail } = data;

		try {
			const patientId = await findPatientAsync({
				firstName,
				lastName,
				phoneOrEmail,
			}).unwrap();

			if (!patientId) {
				const createPatientDto = mapFormDataToCreatePatientDto(data);
				const newPatientId = await createPatientAsync(createPatientDto).unwrap();

				if (!newPatientId) {
					return Operation.failed(failedFindOrCreateErrMessage(firstName, lastName));
				}

				return Operation.success(newPatientId);
			}

			return Operation.success(patientId);
		} catch {
			return Operation.failed();
		}
	};

	const tryAssignPatientToDoctor = async (patientId: string): Promise<boolean> => {
		try {
			const invitationId = await addPatientAsync({ id: patientId, role: Role.PATIENT }).unwrap();

			return invitationId ? true : false;
		} catch {
			return false;
		}
	};

	return {
		register,
		control,
		errors,
		watch,
		isValid,
		submit: handleSubmit(submit),
	};
};
