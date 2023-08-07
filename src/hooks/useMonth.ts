import React, { useState } from 'react';

import { addMonths, addYears, format, subMonths, subYears } from 'date-fns';

export default function useMonth() {
  const [currentYear, setCurrentYear] = useState<Date>(new Date());
  const [currnetMonth, setCurrentMonth] = useState<Date>(new Date());

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

  return {
    currentYear: format(currentYear, 'yyyy'),
    currnetMonth: format(currnetMonth, 'MM'),
    nextMonth,
    prevMonth,
  };
}
