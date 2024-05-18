import { parseISO } from 'date-fns';
import { monthShortMap, weekDayMap } from './date.util';

export function formatGroupDateKey(isoString: string) {
  const date = parseISO(isoString);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const weekDay = date.getUTCDay();

	return `${monthShortMap[month]} ${day}, ${weekDayMap[weekDay]}`;
}
