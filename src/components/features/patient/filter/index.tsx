import FilterItem from './filter-item';
import { Calendar } from '@components/ui/controls';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { patientActions, selectPatientSelection } from '@app/store/entities/patient';

import type { RangeType } from '@components/ui/controls/date-range-picker';

import { classes } from './index.tailwind';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { range } = useAppSelector(selectPatientSelection);

  const handleSelect = (range: RangeType) => {
    dispatch(patientActions.setDateRange(range));
  };

  return (
    <div className={classes.filterContainer}>
      <div>
        <p className={classes.paragraph}>Filter by tasks:</p>
        <ul className={classes.container}>
          <FilterItem onSelect={() => {}} isSelected text="Medication" />
          <FilterItem onSelect={() => {}} isSelected text="Workout" />
          <FilterItem onSelect={() => {}} isSelected={false} text="Go shopping" />
          <FilterItem onSelect={() => {}} isSelected={false} text="Have a sleep" />
        </ul>
      </div>
      <Calendar shownDate={range.startDate} range={range} onSelect={handleSelect} />
    </div>
  );
};

export default Filter;
