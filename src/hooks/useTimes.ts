import { useMemo, useState } from 'react';

import { Value } from 'react-time-picker/dist/cjs/shared/types';

interface TimeProps {
  start: Value;
  end: Value;
}

export default function useTimes(initailProps: TimeProps) {
  const [start, setStart] = useState<Value>(initailProps.start);
  const [end, setEnd] = useState<Value>(initailProps.end);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const minWwage = useMemo(() => 9000, []);

  const validateTime = (start: string, end: string) => {
    const startHour = start.split(':').map(Number);
    const endHour = end.split(':').map(Number);

    if (startHour[0] > endHour[0]) return false;

    if (startHour[0] === endHour[0]) {
      if (startHour[1] > endHour[1]) return false;
    }

    return true;
  };

  const getWorkTime = (start: string, end: string) => {
    let [startHour, startMinute] = start.split(':').map(Number);
    let [endHour, endMinute] = end.split(':').map(Number);

    if (startMinute > endMinute) {
      endHour -= 1;
      endMinute += 60;
    }

    return [endHour - startHour, endMinute - startMinute];
  };

  const getMoney = (start: Value, end: Value) => {
    if (!start || !end) return;
    if (!validateTime(start, end)) return;
    const [workHour, workMinute] = getWorkTime(start, end);

    const money = minWwage * workHour + (workMinute / 60) * minWwage;

    return money;
  };

  const handleStartHour = (value: Value) => {
    setStart(value);
    setEnd(value);
  };

  const handleEndHour = (value: Value) => setEnd(value);

  const handleErrorMsg = (value: string) => setErrorMsg(value);

  return {
    start,
    end,
    errorMsg,
    handleEndHour,
    handleStartHour,
    handleErrorMsg,
    getMoney,
    validateTime,
    minWwage,
  };
}
