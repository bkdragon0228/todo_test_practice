function getWorkTime(start: string, end: string) {
  let [startHour, startMinute] = start.split(':').map(Number);
  let [endHour, endMinute] = end.split(':').map(Number);

  if (startMinute > endMinute) {
    endHour -= 1;
    endMinute += 60;
  }

  return [endHour - startHour, endMinute - startMinute];
}

export default function getMoney(start: string, end: string) {
  const minWwage = 9000;
  const [workHour, workMinute] = getWorkTime(start, end);

  const money = minWwage * workHour + (workMinute / 60) * minWwage;

  return money;
}
