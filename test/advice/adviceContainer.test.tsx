import React from 'react';

import { render, screen } from '@testing-library/react';

import { server } from '../../src/mocks/server';

import AdviceContainer from '../../src/components/advice/adviceContainer';

import { rest } from 'msw';

describe('adviceContainer', () => {
  const renderAdviceContainer = () => render(<AdviceContainer />);
  context('통신 에러가 발생하면', () => {
    it('에러 메시지가 화면에 보인다.', async () => {
      server.use(
        rest.get('https://api.adviceslip.com/advice', (_, res, ctx) => {
          return res(ctx.status(400));
        })
      );

      renderAdviceContainer();

      const errormsg = await screen.findByTestId('advice_error');

      expect(errormsg).toBeInTheDocument();
    });
  });
});
