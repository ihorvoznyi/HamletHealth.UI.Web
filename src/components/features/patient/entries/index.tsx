import Filter from '../filter';
import EntryCard from './entry-card';

import { useAppSelector } from '@shared/model';
import { selectPatientEntriesGroup } from '@app/store/entities/patient';

import { classes } from './index.tailwind';

const PatientEntries = () => {
	const journalEntriesGroup = useAppSelector(selectPatientEntriesGroup);

	return (
		<div className={classes.container}>
			<Filter />
			<ul className={classes.list}>
				{journalEntriesGroup.map(([key, item]) => {
					const [day, weekday] = key.split(',');
					return <EntryCard key={key} day={day} weekday={weekday} journalEntries={item.items} />;
				})}
			</ul>
		</div>
	);
};

export default PatientEntries;
