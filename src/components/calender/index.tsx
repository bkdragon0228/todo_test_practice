import React from 'react';

import { format } from 'date-fns';

import classnames from 'classnames/bind';

import styles from './calender.module.scss';

import useMonth from '../../hooks/useMonth';

import CustomButton from '../atoms/Button';
import { Flex } from '@chakra-ui/react';

const cn = classnames.bind(styles);

const Calender = () => {
  const {
    currnetMonth,
    currentYear,
    nextMonth,
    prevMonth,
    getCalender,
    dayOfWeek,
  } = useMonth();

  const today = format(new Date(), 'MM/dd/yyyy').split('/');

  return (
    <div>
      <Flex justifyContent={'space-between'}>
        <CustomButton onClick={prevMonth} size={'xs'}>
          {'<'}
        </CustomButton>
        {currentYear}년 {currnetMonth}월
        <CustomButton onClick={nextMonth} size={'xs'}>
          {'>'}
        </CustomButton>
      </Flex>

      <nav className={styles.row}>
        {dayOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </nav>
      {getCalender(Number(currentYear), Number(currnetMonth) - 1).map(
        (weeks, index) => (
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
        )
      )}
    </div>
  );
};

export default Calender;
