interface ItemsType {
  type: 'sleep' | 'movie' | 'medicine';
  text: string;
}

export const treatmentList: ItemsType[] = [
  { type: 'sleep', text: 'Have a sleep' },
  { type: 'movie', text: 'Watch a movie' },
  { type: 'medicine', text: 'Omidon 10mg' },
];
