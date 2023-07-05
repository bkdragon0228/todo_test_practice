import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { tasks, ITask } from '../../fixtures/tasks'

import Todo from '../../src/components/todo/todo'


describe('todo', () => {
    const sampleText = 'sample'
    const handleClickSubmit = jest.fn()
    const alertSpy = jest.spyOn(window, 'alert')
    const renderTodo = (tasks : ITask[]) =>
        render(
            <Todo
                tasks={tasks}
                handleClickSubmit={handleClickSubmit}
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
        context('등록할 텍스트가 없다면', () => {
            it('에러 메시지가 보여야한다.', () => {
                renderTodo(tasks)

                fireEvent.click(screen.getByText('등록'))

                expect(alertSpy).toBeCalledWith('할 일을 입력해주세요.');
            })
        })

        context('등록할 텍스트가 있다면', () => {
            it('handleClickSubmit이 호출 되어야 한다.', () => {
                renderTodo(tasks);

                fireEvent.change(screen.getByPlaceholderText('contents'), {
                    target : {
                        value : sampleText
                    }
                })
                fireEvent.click(screen.getByText('등록'))

                expect(handleClickSubmit).toBeCalledWith(sampleText);
            })

            it('텍스트가 할 일 목록에 추가되어야 한다.', () => {
                const { container } = renderTodo(tasks);

                fireEvent.change(screen.getByPlaceholderText('contents'), {
                    target : {
                        value : sampleText
                    }
                })
                fireEvent.click(screen.getByText('등록'))

                expect(container).toHaveTextContent(sampleText)
            })
        })
    })
})
