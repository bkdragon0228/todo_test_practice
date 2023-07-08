import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { server } from '../../src/mocks/server'
import { rest } from 'msw';

import userEvent from '@testing-library/user-event';
import mockConsole from "jest-mock-console";

import TodoContainer from '../../src/components/todo/todoContainer'

describe('todoContainer', () => {
    const renderTodoContainer = () =>
        render(
            <TodoContainer />
        )

    it('title이 보여야한다.', async () => {
        const { container } = renderTodoContainer()

        await waitFor(() => {
            expect(container).toHaveTextContent('할 일')
        })
    })

    context('데이터를 불러오는 api 호출을 할 때', () => {
        context('에러가 발생하지 않았다면', () => {
            it('데이터가 화면에 렌더링 되어야 한다..', async () => {
                renderTodoContainer()

                const task = await screen.findByText('자기')

                await waitFor(() => {
                    expect(task).toBeInTheDocument()
                })
            })
        })

        context('에러가 발생했다면', () => {
            it('에러를 감지해야한다.', async () => {
                server.use(
                    rest.get('https://localhost:3000/tasks', (_, res, ctx) => {
                        return res(ctx.status(400), ctx.json({
                            errorMessage : 'Network error'
                        }) )
                    })
                )
                renderTodoContainer()

                const error = await screen.findByTestId('errorMessage')

                await waitFor(() => {
                    expect(error).toBeInTheDocument()
                })
            })
        })
    })

    context('데이터를 추가하는 api 호출을 할 때', () => {
        context('에러가 발생하지 않았다면', () => {
            it('추가된 데이터가 화면에 렌더링 되어야 한다.', async () => {
                renderTodoContainer()

                const input = screen.getByTestId('todo-input')
                const button = screen.getByText('등록')

                userEvent.type(input, 'sample')
                userEvent.click(button)

                const newTask = await screen.findByText('sample')
                await waitFor(() => {
                    expect(newTask).toBeInTheDocument()
                })

            })
        })

        context('에러가 발생했다면', () => {
            it('추가된 데이터가 없어야 한다.', async () => {
                server.use(
                    rest.post('https://localhost:3000/tasks', (_, res, ctx) => {
                        return res(ctx.status(400))
                    })
                )
                renderTodoContainer()

                const input = screen.getByTestId('todo-input')
                const button = screen.getByText('등록')

                userEvent.type(input, 'sample')
                userEvent.click(button)

                const newTask = screen.queryByText('sample')

                await waitFor(() => {
                    expect(newTask).toBe(null)
                })
            })
        })
    })
})
