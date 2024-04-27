import { Modal } from '@components/ui/common';

import DefineTreatmentPlanForm from './form';

import { useTreatmentPlanStageContext } from '../lib/context';

import { classes } from './index.tailwind';

const DefinePlanModal = () => {
  const { isOpen, setIsOpen } = useTreatmentPlanStageContext();

  return isOpen ? (
      <Modal styles={classes.modal} onClose={() => setIsOpen(false)}>
        <h1 className={classes.title}>Give a name to plan</h1>
        <DefineTreatmentPlanForm />
      </Modal> 
    ) : null;
};

export default DefinePlanModal;
