import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import * as Service from '../../utils/service'
import { tasks } from '../../fixtures/tasks';

import TodoContainer from '../../src/components/todo/todoContainer'

describe('todoContainer', () => {
    const mockFetchData = jest.spyOn(Service, 'FetchData').mockImplementation(async () => {
        return tasks
    })
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

    context('api 호출을 할 때', () => {
        context('에러가 발생했다면', () => {
            it('에러를 감지해야한다.', () => {

            })
        })

        context('에러가 발생하지 않았다면', () => {
            it('mockFecthData가 호출되고 감지되는 에러가 없어야한다.', async () => {
                renderTodoContainer()

                await waitFor(() => {
                    expect(mockFetchData).toHaveBeenCalled()
                })
                await waitFor(() => {
                    expect(screen.getByText(/자기/i)).toBeInTheDocument()
                })
            })
        })
    })
})
