import React, { useCallback } from 'react';

import {
  format,
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  startOfWeek,
} from 'date-fns';

type DayOfWeek = 'Sun' | 'Mon' | 'Tue ' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

interface Cell {
  month: string;
  day: string;
  name: DayOfWeek;
  year: string;
}

type CalenderMap = Cell[][];

const Calender = () => {
  const formatChange = (date: Date) => format(date, 'MM/dd/yyyy/EEE');

  const set = useCallback((year: number, month: number) => {
    const startOfmonth = startOfMonth(new Date(year, month));
    const endOfmonth = endOfMonth(startOfmonth);

    const result: CalenderMap = [];
    let week: Cell[] = [];

    let start = 0;
    const end = formatChange(endOfmonth).split('/').map(Number)[1];
    while (start < end) {
      week = [];

      for (let i = 0; i <= 6; i += 1) {
        let [month, day, year, name] = formatChange(
          addDays(startOfWeek(startOfmonth), start)
        ).split('/');

        if (i !== 0 && name === 'Sun') break;

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
  }, []);

  console.log(subDays(new Date(2023, 8, 1), 1));
  return (
    <div>
      {set(2023, 8 - 1).map((weeks, index) => (
        <div key={index}>
          {weeks.map((day) => (
            <div key={`${day.day}${day.name}`}>{day.day}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calender;
