import React from 'react';

import { screen, render } from '@testing-library/react';

import Calender from '../../src/components/calender';

describe('calender', () => {
  const renderCalender = () => render(<Calender />);

  context('렌더링', () => {
    it('day of week', () => {
      const { container } = renderCalender();
      const setStateMock = jest.fn();
      React.useState = jest
        .fn()
        .mockImplementationOnce((initState: Date) => [initState, setStateMock]);
      expect(container).toHaveTextContent('Sun');
      expect(container).toHaveTextContent('Mon');
      expect(container).toHaveTextContent('Tue');
      expect(container).toHaveTextContent('Wed');
      expect(container).toHaveTextContent('Thu');
      expect(container).toHaveTextContent('Fri');
      expect(container).toHaveTextContent('Sat');
    });

    it('button', () => {
      renderCalender();

      const next = screen.getByText('다음');
      const prev = screen.getByText('이전');

      expect(next).toBeInTheDocument();
      expect(prev).toBeInTheDocument();
    });
  });
});
