export function sortRecordBy<T>(record: Record<string, T[]>, direction: 'ASC' | 'DESC' = 'ASC') {
  const sortedKeys = Object.keys(record).sort((a, b) => {
    const charCodeA = a.toUpperCase().charCodeAt(0);
    const charCodeB = b.toUpperCase().charCodeAt(0);

    if (direction === 'ASC') {
      return charCodeA < charCodeB ? -1 : charCodeA > charCodeB ? 1 : 0;
    } else {
      return charCodeA > charCodeB ? -1 : charCodeA < charCodeB ? 1 : 0;
    }
  });

  const sortedRecord: { key: string, items: T[] }[] = [];
  sortedKeys.forEach(key => {
    sortedRecord.push({ key, items: record[key] });
  });

  return sortedRecord;
}
