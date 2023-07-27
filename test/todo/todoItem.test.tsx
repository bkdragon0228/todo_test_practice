import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoItem from '../../src/components/todo/todoItem';

import userEvent from '@testing-library/user-event';
import { initialState } from '../../fixtures/tasks';
import { TodoProps } from '../../src/store/_reducer/todo';

describe('todoitem', () => {
  const handleCheckBox = jest.fn();
  const handleDelete = jest.fn();

  const renderTodoItemWithItem = ({ description, done, id }: TodoProps) => {
    const { container } = render(
      <TodoItem
        description={description}
        id={id}
        done={done}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />
    );

    const deleteBtn = screen.getByText('삭제');
    const checkbox = screen.getByRole('checkbox');

    return { container, deleteBtn, checkbox };
  };
  const { description, done, id } = initialState[0];

  context('할 일이 화면에 보일 떄', () => {
    it('설명, 체크박스, 삭제 버튼이 보여야한다.', () => {
      const { checkbox, container, deleteBtn } = renderTodoItemWithItem({
        description,
        done,
        id,
      });

      expect(container).toHaveTextContent(initialState[0].description);
      expect(checkbox).toBeInTheDocument();
      expect(deleteBtn).toBeInTheDocument();
    });
  });

  context('삭제 버튼을 클릭하면', () => {
    it('handleDelete가 호출된다.', () => {
      const { deleteBtn } = renderTodoItemWithItem({ description, done, id });

      userEvent.click(deleteBtn);

      expect(handleDelete).toHaveBeenCalledWith(id);
    });
  });

  context('체크 박스를 누르면', () => {
    it('handleCheckBox가 호출된다.', () => {
      const { checkbox } = renderTodoItemWithItem({ description, done, id });

      userEvent.click(checkbox);

      expect(handleCheckBox).toHaveBeenCalledWith(id);
    });
  });

  context('done 값이 true이면', () => {
    it('설명에 취소선이 그어진다.', () => {
      renderTodoItemWithItem({
        description,
        done: true,
        id,
      });

      const des = screen.getByText(description);

      expect(des).toHaveStyle('text-decoration : line-through;');
    });
  });
});
