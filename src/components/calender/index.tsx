import React, { useCallback } from 'react';

import {
  format,
  startOfMonth,
  endOfMonth,
  addDays,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

import classnames from 'classnames/bind';

import styles from './calender.module.scss';

import useMonth from '../../hooks/useMonth';

type DayOfWeek = 'Sun' | 'Mon' | 'Tue ' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

interface Cell {
  month: string;
  day: string;
  name: DayOfWeek;
  year: string;
}

type CalenderMap = Cell[][];

const cn = classnames.bind(styles);

const Calender = () => {
  const { currnetMonth, currentYear, nextMonth, prevMonth } = useMonth();

  const today = format(new Date(), 'MM/dd/yyyy').split('/');

  const dayOfWeek = ['Sun', 'Mon', 'Tue ', 'Wed', 'Thu', 'Fri', 'Sat'];
  const formatChange = (date: Date) => format(date, 'MM/dd/yyyy/EEE');

  const set = useCallback((year: number, month: number) => {
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
  }, []);

  return (
    <div>
      <header>
        {currentYear}년 {currnetMonth}월
      </header>
      <div>
        <button onClick={prevMonth}>이전</button>
        <button onClick={nextMonth}>다음</button>
      </div>
      <nav className={styles.row}>
        {dayOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </nav>
      {set(+currentYear, Number(currnetMonth) - 1).map((weeks, index) => (
        <div key={index} className={styles.row}>
          {weeks.map((day) => (
            <div
              key={`${day.day}${day.name}`}
              className={cn({
                item: true,
                item_current:
                  today[0] === day.month &&
                  today[1] === day.day &&
                  today[2] === day.year,
              })}
            >
              <span>{day.day}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calender;
