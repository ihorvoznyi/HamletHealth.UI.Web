interface IFilterItem {
  id: string,
  text: string,
}

export const FILTER_ITEMS: IFilterItem[] = [
  {
    id: 'id-all',
    text: 'All'
  },
  {
    id: 'id-medicine',
    text: 'Medicine'
  },
  {
    id: 'id-activity',
    text: 'Activity'
  },
];