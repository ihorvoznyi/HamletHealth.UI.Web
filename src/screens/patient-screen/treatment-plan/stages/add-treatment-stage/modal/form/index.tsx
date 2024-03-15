import { useForm } from 'react-hook-form';

import { Input } from '@components/ui';

import { useAppSelector } from '@shared/model';

import { DefinePlanFormType, formSchemaOptions } from './schema';

import { selectTreatmentPlanData, useCreateTreatmentPlanMutation } from '@entities/treatment-plan';

import { classes } from './index.tailwind';
import { TreatmentPlanMapper } from '../lib/helpers';
import { useLoading } from '@hooks/useLoading';
import { Logger } from '@shared/lib/helpers';
import { useTreatmentPlanStageContext } from '../../lib/context';

const DefineTreatmentPlanForm = () => {
	const { setGlobalLoader } = useLoading();
  const { setIsOpen, setIsPlanDefined } = useTreatmentPlanStageContext();
	const [createTreatmentPlanAsync] = useCreateTreatmentPlanMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DefinePlanFormType>(formSchemaOptions);
	const treatmentPlan = useAppSelector(selectTreatmentPlanData);
  const userId = useAppSelector(state => state.userReducer.user.id);

	const createPlan = async (data: DefinePlanFormType) => {
		treatmentPlan.name = data.name;
		treatmentPlan.description = data.description;

		setGlobalLoader(true);

		const createTreatmentPlanDto = TreatmentPlanMapper.mapToCreateTreatmentPlanDto(treatmentPlan);

		createTreatmentPlanAsync(createTreatmentPlanDto)
			.then(() => {
        Logger.info('Success');
        setIsPlanDefined(true);
        setIsOpen(false);
      })
      .catch(console.log)
			.finally(() => setGlobalLoader(false));
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit(createPlan)}>
			<Input register={register('name')} label={'Plan Name'} error={errors.name?.message} />
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
