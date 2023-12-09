import FilterItem from './filter-item';

import { classes } from './index.tailwind';

const Filter = () => {
  return (
    <ul className={classes.container}>
      <FilterItem onSelect={() => {}} isSelected text="Medication" />
      <FilterItem onSelect={() => {}} isSelected text="Workout" />
      <FilterItem onSelect={() => {}} isSelected={false} text="Go shopping" />
      <FilterItem onSelect={() => {}} isSelected={false} text="Have a sleep" />
    </ul>
  );
};

export default Filter;
