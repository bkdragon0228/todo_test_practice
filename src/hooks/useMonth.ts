import React, { useMemo, useState } from 'react';

import {
  addDays,
  addMonths,
  addYears,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subMonths,
  subYears,
} from 'date-fns';

type DayOfWeek = 'Sun' | 'Mon' | 'Tue ' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

interface Cell {
  month: string;
  day: string;
  name: DayOfWeek;
  year: string;
}

type CalenderMap = Cell[][];

export default function useMonth() {
  const [currentYear, setCurrentYear] = useState<Date>(new Date());
  const [currnetMonth, setCurrentMonth] = useState<Date>(new Date());

  const dayOfWeek = useMemo(
    () => ['Sun', 'Mon', 'Tue ', 'Wed', 'Thu', 'Fri', 'Sat'],
    []
  );

  const nextMonth = () => {
    const month = format(currnetMonth, 'MM');

    if (month === '12') {
      setCurrentYear(addYears(currentYear, 1));
    }
    setCurrentMonth(addMonths(currnetMonth, 1));
  };

  const prevMonth = () => {
    const month = format(currnetMonth, 'MM');

    if (month === '01') {
      setCurrentYear(subYears(currentYear, 1));
    }
    setCurrentMonth(subMonths(currnetMonth, 1));
  };

  const formatChange = (date: Date) => format(date, 'MM/dd/yyyy/EEE');

  const getCalender = (year: number, month: number) => {
    const startOfmonth = startOfMonth(new Date(year, month));
    const endOfmonth = endOfMonth(startOfmonth);

    const startOfweek = startOfWeek(startOfmonth);
    const endOfweek = endOfWeek(endOfmonth);

    const result: CalenderMap = [];
    let week: Cell[] = [];

    let start = 0;
    const monthEnd = formatChange(endOfmonth).split('/').map(Number)[1];
    const weekEnd = formatChange(endOfweek).split('/').map(Number)[1];
    const extra = weekEnd === monthEnd ? 0 : weekEnd;

    while (start <= monthEnd + extra) {
      week = [];
      for (let i = 0; i <= 6; i += 1) {
        let [month, day, year, name] = formatChange(
          addDays(startOfweek, start)
        ).split('/');

        const cell: Cell = {
          day,
          month,
          year,
          name: name as DayOfWeek,
        };

        week.push(cell);
        start += 1;
      }

      result.push(week);
    }
    return result;
  };

  return {
    currentYear: format(currentYear, 'yyyy'),
    currnetMonth: format(currnetMonth, 'MM'),
    nextMonth,
    prevMonth,
    getCalender,
    dayOfWeek,
  };
}
