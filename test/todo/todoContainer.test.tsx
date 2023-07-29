import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { server } from '../../src/mocks/server';
import { rest } from 'msw';

import { initialState } from '../../fixtures/tasks';

import userEvent from '@testing-library/user-event';

import TodoContainer from '../../src/components/todo/todoContainer';

import mockReduxWrapper from '../../src/store/mockReduxWrapper';

describe('todoContainer', () => {
  const renderTodoContainer = () => {
    const { Wrapper, store } = mockReduxWrapper({
      todo: initialState,
      modal: {
        isOpen: false,
        todo: {
          description: '',
          done: false,
          id: '1',
        },
      },
    });

    const { container } = render(
      <Wrapper>
        <TodoContainer />
      </Wrapper>
    );

    const checkBoxs = screen.getAllByRole('checkbox');
    const deleteBtns = screen.getAllByText('완료');
    const input = screen.getByTestId('todo-input');
    const submitbtn = screen.getByText('등록');
    const description = screen.getByText(initialState[0].description);

    return {
      container,
      checkBoxs,
      deleteBtns,
      submitbtn,
      description,
      input,
      store,
    };
  };

  context('체크박스를 클릭하면', () => {
    it('todo/changeDone 타입 액션이 생성된다.', () => {
      const { checkBoxs, store } = renderTodoContainer();

      userEvent.click(checkBoxs[0]);

      const actions = store.getActions();
      const action = {
        type: 'todo/changeDone',
        payload: initialState[0].id,
      };

      expect(actions[0]).toEqual(action);
    });
  });

  context('삭제 버튼을 클릭하면', () => {
    it('todo/deleteTodo 타입 액션이 생성 된다.', () => {
      const { deleteBtns, store } = renderTodoContainer();

      userEvent.click(deleteBtns[0]);

      const actions = store.getActions();
      const action = {
        type: 'todo/deleteTodo',
        payload: initialState[0].id,
      };

      expect(actions[0]).toEqual(action);
    });
  });

  context('할 일을 입력하고 등록 버튼을 클릭하면', () => {
    it('todo/addTodo 타입 액션이 생성 된다.', () => {
      const { input, submitbtn, store, container } = renderTodoContainer();

      expect(submitbtn).toBeDisabled();
      userEvent.type(input, 'sample');
      expect(submitbtn).toBeEnabled();

      userEvent.click(submitbtn);

      const actions = store.getActions();
      const actionType = 'todo/addTodo';

      expect(actions[0].type).toEqual(actionType);
      expect(container).toHaveTextContent('sample');
    });
  });
});
