import React, { useCallback } from 'react';

import {
  format,
  startOfMonth,
  endOfMonth,
  addDays,
  startOfWeek,
} from 'date-fns';

import styles from './calender.module.scss';

type DayOfWeek = 'Sun' | 'Mon' | 'Tue ' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

interface Cell {
  month: string;
  day: string;
  name: DayOfWeek;
  year: string;
}

type CalenderMap = Cell[][];

const Calender = () => {
  const dayOfWeek = ['Sun', 'Mon', 'Tue ', 'Wed', 'Thu', 'Fri', 'Sat'];
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

  return (
    <div>
      <nav className={styles.row}>
        {dayOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </nav>
      {set(2023, 8 - 1).map((weeks, index) => (
        <div key={index} className={styles.row}>
          {weeks.map((day) => (
            <div key={`${day.day}${day.name}`} className={styles.item}>
              <span>{day.day}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calender;
