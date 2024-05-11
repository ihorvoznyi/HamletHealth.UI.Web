import { shallowEqual } from 'react-redux';
import { useEffect } from 'react';

import TreatmentPlan from './sections';
import TreatmentPlanCreationModal from './modal';
import TreatmentPlanStageNavigation from './navigation';

import { useAppDispatch, useAppSelector } from '@shared/model';

import { TreatmentPlanStageContextProvider, useTreatmentPlanStageContext } from './lib/context';
import { selectTreatmentPlanStage, treatmentPlanActions } from '@app/store/entities/treatment';
import DefineGoalModal from './sections/selected-activities-section/goal-modal';

const AddTreatmentStageComponent = () => {
	const dispatch = useAppDispatch();
	const { showTreatmentCreationModal, showDefineModal } = useTreatmentPlanStageContext();
	const { stageStatus } = useAppSelector(selectTreatmentPlanStage, shallowEqual);

	useEffect(() => {
		if (stageStatus !== 'filled') {
			dispatch(treatmentPlanActions.setStageStatus('checked'));
		}
	}, []);

	return (
		<>
			<TreatmentPlan />
			<TreatmentPlanStageNavigation />
			{showDefineModal ? <DefineGoalModal /> : null}
			{showTreatmentCreationModal ? <TreatmentPlanCreationModal /> : null}
		</>
	);
};

export default function AddTreatmentStage () {
  return (
    <TreatmentPlanStageContextProvider>
      <AddTreatmentStageComponent />
    </TreatmentPlanStageContextProvider>
  );
}
