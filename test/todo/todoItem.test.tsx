import React from 'react';
import { render , screen} from '@testing-library/react';

import TodoItem from '../../src/components/todo/todoItem'

import userEvent from '@testing-library/user-event'
import { ITask } from '../../fixtures/tasks';

describe('todoitem', () => {
    const sampleTitle = 'sample'
    const sampleId = Math.random()
    const handleCheckBox = jest.fn()

    const renderTodoItem = ({
        title,
        id,
        done
    } : ITask) =>
        render(
            <TodoItem
                title={title}
                id={id}
                done={done}
                handleCheckBox={handleCheckBox}
            />
        )

    it('할 일이 보여야한다.', () => {
        const { container } = renderTodoItem({
            done : false,
            id : Math.random(),
            title : sampleTitle
        })
        expect(container).toHaveTextContent(sampleTitle)
    })

    it('체크 박스가 보여야한다.', () => {
        renderTodoItem({
            done : false,
            id : Math.random(),
            title : sampleTitle
        })
        const checkboxs = screen.getAllByRole('checkbox')
        expect(checkboxs.length).toBeGreaterThanOrEqual(1)
    })

    it('삭제 버튼이 보여야한다.', () => {
        renderTodoItem({
            done : false,
            id : Math.random(),
            title : sampleTitle
        })

        const deleteButton = screen.getAllByLabelText('삭제')
        expect(deleteButton.length).toBeGreaterThanOrEqual(1)
    })

    context('체크 박스를 클릭하면', () => {
        it('handleCheckBox가 호출 되어야 한다..', () => {
            renderTodoItem({
                done : false,
                id : sampleId,
                title : sampleTitle
            })

            userEvent.click(screen.getByRole('checkbox'))

            expect(handleCheckBox).toHaveBeenCalledWith(sampleId)
        })
    })

    context('done 값이 true면 ', () =>{
        it('취소선이 그어져야 한다.', () => {
            renderTodoItem({
                done : true,
                id : Math.random(),
                title : sampleTitle
            })

            expect(screen.getByText(sampleTitle)).toHaveStyle('text-decoration: line-through;')
        })
    })

    context('삭제 버튼을 클릭하면', () => {
        it('handleDelete 함수가 호출 되어야 한다.', () => {
            renderTodoItem({
                done : false,
                id : sampleId,
                title : sampleTitle
            })

            const deleteButton = screen.getAllByLabelText('삭제')

            userEvent.click(deleteButton[0])

            expect(handleDelete).toHaveBeenCalled()
            handleDelete.mockRestore()
        })
    })
})
