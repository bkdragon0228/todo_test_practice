import React from 'react';

import { screen, render } from '@testing-library/react';

import { dummyCalender } from '../../fixtures/tasks';

import userEvent from '@testing-library/user-event';

import Calender from '../../src/components/calender';

import * as useMonth from '../../src/hooks/useMonth';

describe('calender', () => {
  const renderCalender = () => {
    const useMonthMock = jest
      .spyOn(useMonth, 'default')
      .mockImplementation(() => ({
        currentYear: '2023',
        currnetMonth: '09',
        nextMonth: jest.fn(),
        prevMonth: jest.fn(),
        getCalender: jest
          .fn()
          .mockImplementation(() => JSON.parse(dummyCalender)),
        dayOfWeek: ['Sun', 'Mon', 'Tue ', 'Wed', 'Thu', 'Fri', 'Sat'],
      }));

    const { container } = render(<Calender />);
    return {
      container,
      useMonthMock,
    };
  };
  context('컴포넌트가 렌더링 되면', () => {
    it('현재 연도와 월 요일이 보인다.', () => {
      const { container, useMonthMock } = renderCalender();

      expect(container).toHaveTextContent('Sun');
      expect(container).toHaveTextContent('Mon');
      expect(container).toHaveTextContent('Tue');
      expect(container).toHaveTextContent('Wed');
      expect(container).toHaveTextContent('Thu');
      expect(container).toHaveTextContent('Fri');
      expect(container).toHaveTextContent('Sat');
      expect(container).toHaveTextContent('09월');
      expect(container).toHaveTextContent('2023년');

      useMonthMock.mockRestore();
    });

    it('달력을 생성하는 함수가 호출된다.', () => {
      const { useMonthMock } = renderCalender();

      expect(
        useMonthMock.mock.results[0].value.getCalender
      ).toHaveBeenCalledWith(2023, 9 - 1);
      useMonthMock.mockRestore();
    });

    it('다음과 이전 버튼이 보인다.', () => {
      const { useMonthMock } = renderCalender();

      const next = screen.getByText('다음');
      const prev = screen.getByText('이전');

      expect(next).toBeInTheDocument();
      expect(prev).toBeInTheDocument();

      useMonthMock.mockRestore();
    });
  });

  context('다음 button을 눌렀을 때', () => {
    it('nextMonth 함수가 호출된다.', () => {
      const { useMonthMock } = renderCalender();

      const next = screen.getByText('다음');
      userEvent.click(next);

      expect(useMonthMock.mock.results[0].value.nextMonth).toHaveBeenCalled();
      expect(
        useMonthMock.mock.results[0].value.prevMonth
      ).not.toHaveBeenCalled();
      useMonthMock.mockRestore();
    });
  });
});
