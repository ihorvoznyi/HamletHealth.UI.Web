import { useForm } from 'react-hook-form';

import { Input } from '@components/ui';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { useTreatmentPlanStageContext } from '../../lib/context';

import { DefinePlanFormType, formSchemaOptions } from './schema';

import { 
  selectAddPatientStageData, 
  selectTreatmentPlanData, 
  useAddPatientMutation, 
  useCreateTreatmentPlanMutation 
} from '@entities/treatment-plan';

import { PatientMapper, TreatmentPlanMapper } from '../lib/helpers';

import { appActions } from '@app/store';

import { classes } from './index.tailwind';
import { selectUserId } from '@entities/user';

const DefineTreatmentPlanForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm<DefinePlanFormType>(formSchemaOptions);
  const treatmentPlan = useAppSelector(selectTreatmentPlanData);
  const userId = useAppSelector(selectUserId);
  const patient = useAppSelector(selectAddPatientStageData);
  const { setIsPlanDefined, setIsOpen } = useTreatmentPlanStageContext();

  const [addPatientAsync] = useAddPatientMutation();
  const [createPlanAsync] = useCreateTreatmentPlanMutation();
  
  const createPlan = async (data: DefinePlanFormType) => {
    treatmentPlan.name = data.name;
    treatmentPlan.description = data.description;

    dispatch(appActions.setGlobalLoader(true));
    try {
      const addPatientDto = PatientMapper.mapToAddPatientDto(patient);
      const { data: invitedUserId } = await addPatientAsync(addPatientDto) as unknown as { data: string };

      if (invitedUserId) {
        const createTreatmentPlanDto = 
          TreatmentPlanMapper.mapToCreateTreatmentPlanDto('00000000-0000-0000-0000-000000000000', treatmentPlan);
          // TreatmentPlanMapper.mapToCreateTreatmentPlanDto('06fd7b7e-b095-4c51-6b7a-08dc4148b980', treatmentPlan);
        const response = await createPlanAsync(createTreatmentPlanDto);
        console.log(response);
      }
    } catch {
      //
    } finally {
      dispatch(appActions.setGlobalLoader(false));
    }
    //
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(createPlan)}>
      <Input register={register('name')} label={'Plan Name'} error={errors.name?.message} />
      <Input register={register('description')} label={'Description'} error={errors.description?.message} />
      <button type="submit" className={classes.btn}>
        Create Plan
      </button>
    </form>
  );
};

export default DefineTreatmentPlanForm;