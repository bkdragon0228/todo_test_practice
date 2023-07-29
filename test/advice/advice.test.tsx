import React from 'react';

import Advice, { AdviceProps } from '../../src/components/advice/Advice';

import { render, screen } from '@testing-library/react';

import { initalAdvice } from '../../fixtures/tasks';

describe('Advice', () => {
  const renderAdvice = (adviceData: AdviceProps) => {
    const { container } = render(
      <Advice advice={adviceData?.advice} id={adviceData?.id} />
    );

    const advice = screen.getByTestId('advice');
    const changeBtn = screen.getByTestId('advice_change_btn');

    return {
      container,
      advice,
      changeBtn,
    };
  };

  context('컴포넌트가 렌더링 되면', () => {
    it('명언과 명언 변경 버튼이 보여야 한다.', () => {
      const { advice, changeBtn } = renderAdvice(initalAdvice);

      expect(advice).toBeInTheDocument();
      expect(changeBtn).toBeInTheDocument();
    });
  });
});
