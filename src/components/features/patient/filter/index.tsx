import DateItem from '@screens/patient-screen/shared/date-item';
import FilterItem from './filter-item';

import { classes } from './index.tailwind';

const Filter = () => {
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
      <DateItem />
    </div>
  );
};

export default Filter;
