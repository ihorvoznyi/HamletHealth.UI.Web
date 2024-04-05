import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input } from '@components/ui';

import { useLoading } from '@hooks/useLoading';
import { useAppSelector } from '@shared/model';

import { DefinePlanFormType, formSchemaOptions } from './schema';

import { selectTreatmentPlanData, useCreateTreatmentPlanMutation } from '@entities/treatment-plan';

import { classes } from './index.tailwind';
import { TreatmentPlanMapper } from '../lib/helpers';
import { Logger } from '@shared/lib/helpers';
import { useTreatmentPlanStageContext } from '../../lib/context';
import { APP_ROUTES } from '@configs/routes.config';

const DefineTreatmentPlanForm = () => {
	const { setGlobalLoader } = useLoading();
  const { setIsOpen } = useTreatmentPlanStageContext();
	const [createTreatmentPlanAsync] = useCreateTreatmentPlanMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DefinePlanFormType>(formSchemaOptions);
	const navigate = useNavigate();
	const treatmentPlan = useAppSelector(selectTreatmentPlanData);

	const createPlan = async (data: DefinePlanFormType) => {
		treatmentPlan.name = data.name;
		treatmentPlan.description = data.description;

		setGlobalLoader(true);

		const createTreatmentPlanDto = TreatmentPlanMapper.mapToCreateTreatmentPlanDto(treatmentPlan);

		createTreatmentPlanAsync(createTreatmentPlanDto)
			.then(() => {
        Logger.info('Treatment plan was successfully created.');
				navigate(APP_ROUTES.MY_PATIENTS);
        setIsOpen(false);
      })
			.catch(({ data }) => {
				const defaultMessage = 'Failed to create treatment plan.';
				toast.error(data.Messages[0] ?? defaultMessage, { position: 'top-center' });
			})
			.finally(() => setGlobalLoader(false));
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit(createPlan)}>
			<Input 
				register={register('name')} 
				label={'Plan Name'}
				error={errors.name?.message}
			/>
			<Input
				register={register('description')}
				label={'Description'}
				error={errors.description?.message}
			/>
			<button type="submit" className={classes.btn}>
				Create Plan
			</button>
		</form>
	);
};

export default DefineTreatmentPlanForm;
