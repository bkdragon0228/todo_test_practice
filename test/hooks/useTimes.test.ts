import { act } from 'react-dom/test-utils';
import useTimes from '../../src/hooks/useTimes';

import { renderHook } from '@testing-library/react';

describe('useTimes', () => {
  const setUpCustomHook = () =>
    renderHook(() => useTimes({ start: '00:00', end: '00:00' }));

  context('시작 시간을 변경하면', () => {
    it('시작 시간과 종료 시간이 변경된다.', () => {
      const { result } = setUpCustomHook();

      act(() => {
        result.current.handleStartHour('15:00');
      });

      expect(result.current.start).toBe('15:00');
      expect(result.current.end).toBe('15:00');
    });
  });

  context('종료 시간을 변경하면', () => {
    it('종료 시간이 변경된다', () => {
      const { result } = setUpCustomHook();

      act(() => {
        result.current.handleEndHour('15:00');
      });

      expect(result.current.end).toBe('15:00');
    });
  });

  context('getMoney', () => {
    context('시작 시간과 종료 시간을 입력하면', () => {
      it('일당을 계산해준다.', () => {
        const { result } = setUpCustomHook();

        act(() => {
          result.current.handleStartHour('12:00');
          result.current.handleEndHour('13:00');
        });

        const money = result.current.getMoney(
          result.current.start,
          result.current.end
        );

        expect(money).toBe(result.current.minWwage);
      });
    });

    context('시간을 잘못 입력하면', () => {
      it('undefined을 반환 한다.', () => {
        const { result } = setUpCustomHook();

        act(() => {
          result.current.handleStartHour('12:00');
          result.current.handleEndHour('11:00');
        });

        const money = result.current.getMoney(
          result.current.start,
          result.current.end
        );

        expect(money).toBeUndefined();
      });
    });
  });
});
