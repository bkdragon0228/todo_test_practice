import React from 'react';

import getMoney from '../../src/utils/getMoney';

describe('getMoney', () => {
  context('시작 시간과 종료 시간을 인자로 넣으면', () => {
    it('최저 시급에 따라 일당을 계산해준다.', () => {
      const money = getMoney('13:00', '15:00');

      expect(money).toBe(18000);
    });
  });
});
