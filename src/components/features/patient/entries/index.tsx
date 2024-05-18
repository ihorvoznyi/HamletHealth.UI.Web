import Filter from '../filter';
import EntryCard from './entry-card';

import { useAppSelector } from '@shared/model';
import { selectPatientEntriesGroup } from '@app/store/entities/patient';

import { classes } from './index.tailwind';
import { useCallback } from 'react';

const PatientEntries = () => {
	const journalEntriesGroup = useAppSelector(selectPatientEntriesGroup);
	
	const renderJournalEntries = useCallback(() => {
		if (journalEntriesGroup.length === 0) {
			return <p className="ml-[40px] text-[14px]">No journal entries available.</p>;
		}

		return (
			<ul className={classes.list}>
				{journalEntriesGroup.map(([key, item]) => {
					const [day, weekday] = key.split(',');
					return <EntryCard key={key} day={day} weekday={weekday} journalEntries={item.items} />;
				})}
			</ul>
		);
	}, [journalEntriesGroup]);

	return (
		<div className={classes.container}>
			<Filter />
			{renderJournalEntries()}
		</div>
	);
};

export default PatientEntries;
