import React from 'react';
import { ITask } from '../../../fixtures/tasks';

type TodoItemProps = ITask & {
    handleCheckBox : (id : number) => void;
    handleDelete : (id : number) => void;
}

const TodoItem : React.FC<TodoItemProps> = ({
    title,
    id,
    done,
    handleCheckBox,
    handleDelete
}) => {
    return (
        <div style={{
            display : 'flex'
        }}>
            <input
                type='checkbox'
                onChange={() => handleCheckBox(id)}
                />
            <div
                style={{
                    textDecoration : done ? 'line-through' : 'none'
                }}
            >
                {title}
            </div>
            <button
                onClick={() => handleDelete(id)}
                >
                    삭제
            </button>
        </div>
    );
};

export default TodoItem;