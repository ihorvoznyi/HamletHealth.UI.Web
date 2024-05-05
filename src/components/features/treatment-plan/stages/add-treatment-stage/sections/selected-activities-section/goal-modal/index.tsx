/* eslint-disable max-len */
import React from 'react';

import Head from './head';
import Counter from './counter';
import Duration from './duration';
import WeekDays from './week-days';
import Description from './description';
import Modal from '@components/ui/common/modal';
import { Button } from '@components/ui/controls';
import { useTreatmentPlanStageContext } from '@components/features/treatment-plan/stages/add-treatment-stage/lib/context';

import { classes } from './index.tailwind';

interface PropsType {
  //
}

const DefineGoalModal: React.FC<PropsType> = () => {
	const { closeDefinePlanModal } = useTreatmentPlanStageContext();

	return (
		<Modal onClose={closeDefinePlanModal}>
			<Head />

			<div className={classes.contentContainer}>
				<Counter />
				<Duration />
				<WeekDays />
				<Description />

				<div className={classes.btnsContainer}>
					<Button variant="outlined" styles={classes.cancelBtn} onClick={closeDefinePlanModal}>
						Cancel
					</Button>
					<Button styles={classes.saveBtn} onClick={() => {}}>
						Save Goal
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default DefineGoalModal;
