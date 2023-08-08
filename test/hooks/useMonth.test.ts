import React from 'react';

import { format } from 'date-fns';

import { renderHook } from '@testing-library/react';

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
});
