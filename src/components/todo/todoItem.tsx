import React from 'react';
import { ITask } from '../../../fixtures/tasks';

const TodoItem : React.FC<ITask & {handleCheckBox : (id : number) => void}> = ({
    title,
    id,
    done,
    handleCheckBox
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
        </div>
    );
};

export default TodoItem;