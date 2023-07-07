import React from 'react'
import { render, screen } from '@testing-library/react'
import { tasks, ITask } from '../../fixtures/tasks'

import Todo from '../../src/components/todo/todo'

describe('todo', () => {
    const handleCheckbox = jest.fn()
    const handleDelete = jest.fn()

    const renderTodo = (tasks : ITask[]) =>
        render(
            <Todo
                tasks={tasks}
                handleCheckBox={handleCheckbox}
                handleDelete={handleDelete}
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

})
