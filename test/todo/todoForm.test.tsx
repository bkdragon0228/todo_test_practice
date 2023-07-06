import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoForm from '../../src/components/todo/todoForm'
import userEvent from '@testing-library/user-event';

import mockConsole from "jest-mock-console";

describe('TodoForm', () => {
    const sampleText = 'sample'
    const handleSubmit = jest.fn()
    const showError = jest.fn().mockImplementation(() => console.error(''))

    const renderTodoForm = () =>
        render(
            <TodoForm
                handleSubmit={handleSubmit}
                showError={showError}
            />
        )

    it('할 일을 입력할 input이 있어야 한다.', () => {
        renderTodoForm()

        screen.getByTestId('todo-input')
    })

    it('할 일 입력 후 누를 button이 있어야 한다,', () => {
        renderTodoForm()

        screen.getByText('등록')
    })

    context('등록 버튼을 눌렀을 때', () => {

        context('등록할 값이 없다면', () => {
            it('에러 메시지가 발생한다', () => {
                renderTodoForm()

                mockConsole('error')

                userEvent.click(screen.getByText('등록'))

                expect(showError).toHaveBeenCalled()
                expect(console.error).toHaveBeenCalled()
                showError.mockRestore()
            })
        })

        context('등록할 값이 있다면', () => {
            it('handleSubmit이 호출 된다.', () => {
                renderTodoForm()

                const input = screen.getByTestId('todo-input')
                const button = screen.getByText('등록')

                userEvent.type(input, sampleText)
                userEvent.click(button)

                expect(input).toHaveAttribute('value', sampleText)
                expect(handleSubmit).toHaveBeenCalledWith(sampleText)
                handleSubmit.mockRestore()
            })
        })
    })

})
