interface IFilterItem {
  type: 'all' | 'activity' | 'medicine',
  text: string,
}

export const FILTER_ITEMS: IFilterItem[] = [
  {
    type: 'all',
    text: 'All'
  },
  {
    type: 'medicine',
    text: 'Medicine'
  },
  {
    type: 'activity',
    text: 'Activity'
  },
];