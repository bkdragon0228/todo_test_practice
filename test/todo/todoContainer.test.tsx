import React from 'react';
// import context from 'jest-plugin-context';
import { render} from '@testing-library/react';

import TodoContainer from '../../src/components/todo/todoContainer'

describe('todoContainer', () => {

    const renderTodoContainer = () =>
        render(
            <TodoContainer />
        )

    it('title이 보여야한다.', () => {
        const { container } = renderTodoContainer()

        expect(container).toHaveTextContent('할 일')
    })
})
