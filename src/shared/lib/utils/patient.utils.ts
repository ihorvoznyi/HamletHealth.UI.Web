import { monthShortMap, weekDayMap } from './date.util';

export function formatGroupDateKey(isoString: string) {
  const date = new Date(isoString);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const weekDay = date.getUTCDay();

	return `${monthShortMap[month]} ${day}, ${weekDayMap[weekDay]}`;
}
