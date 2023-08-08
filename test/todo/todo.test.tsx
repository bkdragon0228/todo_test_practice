import React from 'react';
import { render } from '@testing-library/react';

import Todo from '../../src/components/todo/todo';
import { StateProps } from '../../src/store/_reducer/todo';

describe('todo', () => {
  const handleCheckbox = jest.fn();
  const handleDelete = jest.fn();

  const renderTodo = (todos: StateProps) =>
    render(
      <Todo
        todos={todos}
        handleCheckBox={handleCheckbox}
        handleComplete={handleDelete}
      />
    );

  context('할 일 목록이 없다면', () => {
    it('할 일 없음이 화면에 보여야한다.', () => {
      const { container } = renderTodo([]);

      expect(container).toHaveTextContent('할 일 없음');
    });
  });
});
