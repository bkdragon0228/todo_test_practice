import React from 'react'
import { render, screen } from '@testing-library/react'
import { tasks, ITask } from '../../fixtures/tasks'


import Todo from '../../src/components/todo/todo'
import userEvent from '@testing-library/user-event'

describe('todo', () => {
    const sampleText = 'sample'
    const handleChange = jest.fn()
    const handleClickSubmit = jest.fn()
    const consoleErrorSpy = jest.spyOn(global.console, 'error')

    const renderTodo = (tasks : ITask[]) =>
        render(
            <Todo
                tasks={tasks}
                handleClickSubmit={handleClickSubmit}
                handleChange={handleChange}
            />
        )

    context('할 일 목록이 없다면', () => {
        it('할 일 없음이 화면에 보여야한다.', () => {
            const { container } = renderTodo([])

            expect(container).toHaveTextContent('할 일 없음')
        })
    })

    context('할 일 목록이 있다면', () => {
        it('할 일이 화면에 보여야한다', () => {
            renderTodo(tasks)
            const checkBoxs = screen.getAllByRole('checkbox')
            expect(checkBoxs.length).toBe(tasks.length)
        })
    })

    context('등록 버튼을 눌렀을 때', () => {
        context('등록할 텍스트가 없다면',  () => {
            it('에러메시지가 발생해야한다..', async () => {
                consoleErrorSpy.mockImplementation(() => {})
                renderTodo(tasks)

                userEvent.click(screen.getByText('등록'))

                expect(handleClickSubmit).toHaveBeenCalled()
            })
        })

        context('등록할 텍스트가 있다면',  () => {
            it('handleClickSubmit이 호출되어야 한다.', async () => {
                renderTodo(tasks)

                userEvent.type(screen.getByTestId('todo-input'), sampleText)
                userEvent.click(screen.getByText('등록'))

                expect(handleChange.mock.calls.length).toBeGreaterThanOrEqual(sampleText.length)
                expect(handleClickSubmit).toHaveBeenCalled()
            })
        })
    })
})
