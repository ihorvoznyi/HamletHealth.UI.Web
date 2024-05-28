import { parseISO } from 'date-fns';
import { monthShortMap, weekDayMap } from './date.util';

export function formatGroupDateKey(isoString: string) {
  const date = parseISO(isoString);
  const day = date.getDate();
  const month = date.getMonth();
  const weekDay = date.getDay();

  return `${monthShortMap[month]} ${day}, ${weekDayMap[weekDay]}`;
}
