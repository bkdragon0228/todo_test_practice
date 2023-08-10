import React from 'react';

import { format } from 'date-fns';

import { renderHook } from '@testing-library/react';

import { act } from 'react-dom/test-utils';

import useMonth from '../../src/hooks/useMonth';

describe('useMonth', () => {
  const current = format(new Date(), 'MM/dd/yyyy').split('/');
  const setCustomHook = () => renderHook(() => useMonth());

  context('useMonth 훅은 ', () => {
    it('현재의 연도와 월을 반환 한다.', () => {
      const { result } = setCustomHook();

      expect(result.current.currentYear).toBe(current[2]);
      expect(result.current.currnetMonth).toBe(current[0]);
    });
  });

  context('nextMonth를 사용하면', () => {
    it('월이 1 증가한다.', () => {
      const { result } = setCustomHook();

      act(() => {
        result.current.nextMonth();
      });

      let compare = Number(current[0]) + 1;
      let compareStr: string;
      if (compare < 10) {
        compareStr = `0${compare}`;
      } else {
        compareStr = `${compare}`;
      }

      expect(result.current.currnetMonth).toBe(compareStr);
    });
  });
});
