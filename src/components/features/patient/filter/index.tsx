import { bindActionCreators } from '@reduxjs/toolkit';

import FilterItem from './filter-item';
import IndicatorsFilter from './select-indicators';
import { Calendar } from '@components/ui/controls';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { patientActions, selectPatientActions, selectPatientSelection } from '@app/store/entities/patient';

import type { RangeType } from '@components/ui/controls/date-range-picker';

import { classes } from './index.tailwind';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { range, activities: activities } = useAppSelector(selectPatientSelection);
  const { setSelection, setDateRange } = bindActionCreators(patientActions, dispatch);

  const patientActivities = useAppSelector(selectPatientActions);

  const handleRangeSelect = (range: RangeType) => {
    void setDateRange(range);
  };

  const handleSelectAction = (id: string) => {
    const exist = activities.find((activityId) => activityId === id);
    if (exist) {
      setSelection({
        activities: activities.filter((activityId) => activityId !== id),
      });
      return;
    }

    setSelection({
      activities: [...activities, id],
    });
  };

  return (
    <div className={classes.filterContainer}>
      <div className="flex flex-col gap-4">
        <div>
          <p className={classes.paragraph}>Filter by tasks:</p>
          <ul className={classes.container}>
            {patientActivities.map((activity) => {
              const isSelected = !!activities.find((activityId) => activityId === activity.id);
              return (
                <FilterItem
                  key={activity.id}
                  id={activity.id}
                  isSelected={isSelected}
                  text={activity.name}
                  onSelect={handleSelectAction}
                />
              );
            })}
          </ul>
        </div>

        <IndicatorsFilter />
      </div>
      <Calendar shownDate={range.startDate} range={range} onSelect={handleRangeSelect} />
    </div>
  );
};

export default Filter;
