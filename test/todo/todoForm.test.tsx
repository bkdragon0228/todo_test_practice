import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TodoForm from '../../src/components/todo/todoForm';
import userEvent from '@testing-library/user-event';

import mockConsole from 'jest-mock-console';

describe('TodoForm', () => {
  const sampleText = 'sample';
  const handleSubmit = jest.fn();

  const renderTodoForm = () => render(<TodoForm handleSubmit={handleSubmit} />);

  context('todoForm이 화면에 렌더링 되면', () => {
    it('할 일을 입력할 input이 있어야 한다.', () => {
      renderTodoForm();

      screen.getByTestId('todo-input');
    });

    it('할 일 입력 후 누를 button이 있어야 한다,', () => {
      renderTodoForm();

      screen.getByText('등록');
    });
  });

  context('등록 버튼을 눌렀을 때', () => {
    context('등록할 값이 없다면', () => {
      it('등록 버튼이 비활성화 된다.', () => {
        renderTodoForm();

        expect(screen.getByText('등록')).toBeDisabled();
      });
    });

    context('등록할 값이 있다면', () => {
      it('handleSubmit이 호출 된다.', () => {
        renderTodoForm();

        const input = screen.getByTestId('todo-input');
        const button = screen.getByText('등록');

        userEvent.type(input, sampleText);

        expect(button).toBeEnabled();

        userEvent.click(button);

        expect(handleSubmit).toHaveBeenCalledWith(sampleText);
      });
    });
  });
});
