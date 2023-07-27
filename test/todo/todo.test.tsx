import React from 'react';
import { render, screen } from '@testing-library/react';

import Todo from '../../src/components/todo/todo';
import { StateProps } from '../../src/store/_reducer/todo';
import { initialState } from '../../fixtures/tasks';

describe('todo', () => {
  const handleCheckbox = jest.fn();
  const handleDelete = jest.fn();

  const renderTodo = (todos: StateProps) =>
    render(
      <Todo
        todos={todos}
        handleCheckBox={handleCheckbox}
        handleDelete={handleDelete}
      />
    );

  context('할 일 목록이 없다면', () => {
    it('할 일 없음이 화면에 보여야한다.', () => {
      const { container } = renderTodo([]);

      expect(container).toHaveTextContent('할 일 없음');
    });
  });
});
