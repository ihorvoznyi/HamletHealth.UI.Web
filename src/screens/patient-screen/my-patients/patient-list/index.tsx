import React, { useMemo, useEffect } from 'react';

import { useMyPatientContext } from '../lib';

import { renderPatientItem } from './patient-item';
import { sortRecordBy } from '@utils/sort.util';
import { includesCaseInsensitive } from '@utils/text.util';
import { groupByFirstLetter } from './index.helper';

import { IPatient } from '@entities/patient';

import { classes } from './index.tailwind';

interface PropsType {
  patients: IPatient[];
}

const PatientList: React.FC<PropsType> = ({ patients }) => {
  const { sortBy, searchTerm, total, setTotal } = useMyPatientContext();

	const groupedPatients = useMemo(() => {
    const filterBySearchTerm = patients.filter(({ firstName, lastName }) => {
      const fullname = `${firstName} ${lastName}`;
      return includesCaseInsensitive(fullname, searchTerm);
    });

    const groupRecord = groupByFirstLetter(filterBySearchTerm);
    const sortedRecord = sortRecordBy(groupRecord, sortBy);

    return sortedRecord;
  }, [patients, sortBy, searchTerm]);

  useEffect(() => {
    const totalGroupedItems = groupedPatients.reduce((acc, item) => acc + item.items.length, 0);
    if (total !== totalGroupedItems) {
      setTotal(totalGroupedItems);
    }
  }, [groupedPatients]);

	return (
		<div className={classes.container}>
			{groupedPatients.map(({ key, items }) => (
        <React.Fragment key={key}>
          <div>
            <p className={classes.sectionName}>{key}</p>
            <ul className={classes.list}>
              {items.map(renderPatientItem)}
            </ul>
          </div>
        </React.Fragment>
			))}
		</div>
	);
};

export default PatientList;
