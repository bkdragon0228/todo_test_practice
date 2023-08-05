import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import { initialState } from '../../fixtures/tasks';

import { act } from 'react-dom/test-utils';

import CompleteModal from '../../src/components/modal/CompleteModal';

import mockReduxWrapper from '../../src/store/mockReduxWrapper';
import userEvent from '@testing-library/user-event';

describe('completeModal', () => {
  const renderCompleteModal = () => {
    const { Wrapper, store } = mockReduxWrapper({
      todo: initialState,
      modal: { isOpen: true, todo: initialState[0] },
    });

    const { container } = render(
      <Wrapper>
        <CompleteModal />
      </Wrapper>
    );

    return {
      container,
      store,
    };
  };

  context('modal 창이 화면에 보이면', () => {
    it('modal창 내부 컨텐츠들이 보인다.', async () => {
      const { container } = renderCompleteModal();

      const timePickers = screen.getAllByTestId('timePicker');

      expect(container).toHaveTextContent('완료한 일');
      expect(container).toHaveTextContent('시간');
      expect(container).toHaveTextContent('시작시간');
      expect(container).toHaveTextContent('종료시간');
      expect(timePickers).toHaveLength(2);
    });
  });

  context('시작 시간과 종료 시간을 알맞게 입력하고 확인을 클릭하면', () => {
    it('complete/addComplete action이 dispatch 된다.', async () => {
      const { store } = renderCompleteModal();

      const timePickers = screen.getAllByDisplayValue('00:00');
      const submitBtn = screen.getByText('확인');

      userEvent.type(timePickers[0], '13:00');
      userEvent.type(timePickers[1], '15:00');
      userEvent.click(submitBtn);

      const actions = await waitFor(() => store.getActions());
      expect(actions[0].type).toBe('complete/addComplete');
    });
  });

  context('시작 시간과 종료 시간을 잘못 입력하고 확인을 클릭하면', () => {
    it('action이 dispatch 되지 않는다.', async () => {
      const { store } = renderCompleteModal();

      const timePickers = screen.getAllByDisplayValue('00:00');
      const submitBtn = screen.getByText('확인');

      userEvent.type(timePickers[0], '15:00');
      userEvent.type(timePickers[1], '13:00');
      userEvent.click(submitBtn);

      const actions = await waitFor(() => store.getActions());
      expect(actions).toHaveLength(0);
    });
  });
});
