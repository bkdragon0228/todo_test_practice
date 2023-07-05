import React from 'react'
import { render, screen } from '@testing-library/react'
import { tasks, ITask } from '../../fixtures/tasks'

import Todo from '../../src/components/todo/todo'


describe('todo', () => {
    const renderTodo = (tasks : ITask[]) =>
        render(
            <Todo
                tasks={tasks}
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
            expect(checkBoxs.length).toBeGreaterThan(2)
        })
    })

    context('등록 버튼을 눌렀을 때', () => {

        context('등록할 텍스트가 없다면', () => {
            it('에러 메시지가 보여야한다.', () => {

            })
        })

        context('등록할 텍스트가 있다면', () => {

            it('텍스트가 할 일 목록에 추가되어야 한다.', () => {

            })
        })
    })
})
