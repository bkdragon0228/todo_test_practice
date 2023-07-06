import React from 'react';
import { render } from '@testing-library/react';

import TodoItem from '../../src/components/todo/todoItem'

describe('todoContainer', () => {
    const sampleTitle = 'sample'
    const renderTodoItem = () =>
        render(
            <TodoItem
                title={sampleTitle}
            />
        )

    it('할 일이 보여야한다.', () => {
        const { container } = renderTodoItem()
        expect(container).toHaveTextContent(sampleTitle)
    })
})
