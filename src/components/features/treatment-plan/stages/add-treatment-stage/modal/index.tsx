import { Modal } from '@components/ui/common';

import TreatmentPlanCreationForm from './form';

import { useTreatmentPlanStageContext } from '../lib/context';

import { classes } from './index.tailwind';

const TreatmentPlanCreationModal = () => {
	const { closeTreatmentPlanCreationModal } = useTreatmentPlanStageContext();

	return (
		<Modal styles={classes.modal} onClose={closeTreatmentPlanCreationModal}>
			<h1 className={classes.title}>Give a name to plan</h1>
			<TreatmentPlanCreationForm />
		</Modal>
	);
};

export default TreatmentPlanCreationModal;
