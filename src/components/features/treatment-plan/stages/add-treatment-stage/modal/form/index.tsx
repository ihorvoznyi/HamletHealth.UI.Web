import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { Input } from '@components/ui/controls';

import { useLoading } from '@hooks/useLoading';
import { useAppDispatch, useAppSelector } from '@shared/model';
import { useTreatmentPlanStageContext } from '../../lib/context';

import { DefinePlanFormType, formSchemaOptions } from './schema';

import { 
	selectTreatmentPlanData, 
	treatmentPlanActions, 
	useCreateTreatmentPlanMutation 
} from '@app/store/entities/treatment';

import { Logger } from '@shared/lib/helpers';
import { TreatmentPlanMapper } from '../lib/helpers';

import { classes } from './index.tailwind';

const TreatmentPlanCreationForm = () => {
	const dispatch = useAppDispatch();

	const { setGlobalLoader } = useLoading();
  const { closeTreatmentPlanCreationModal } = useTreatmentPlanStageContext();
	const [createTreatmentPlanAsync] = useCreateTreatmentPlanMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DefinePlanFormType>(formSchemaOptions);
	const treatmentPlan = useAppSelector(selectTreatmentPlanData);

	const createPlan = async (data: DefinePlanFormType) => {
		treatmentPlan.name = data.name;
		treatmentPlan.description = data.description;

		setGlobalLoader(true);

		const createTreatmentPlanDto = TreatmentPlanMapper.mapToCreateTreatmentPlanDto(treatmentPlan);

		createTreatmentPlanAsync(createTreatmentPlanDto)
			.then(() => {
        Logger.info('Treatment plan was successfully created.');
				dispatch(treatmentPlanActions.setStageStatus('filled'));
        closeTreatmentPlanCreationModal();
      })
			.catch(err => {
				console.error(err);
				const defaultMessage = 'Failed to create treatment plan.';
				toast.error(defaultMessage, { position: 'top-center' });
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

export default TreatmentPlanCreationForm;
