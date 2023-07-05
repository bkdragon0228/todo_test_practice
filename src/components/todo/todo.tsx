import React from 'react';

import { ITask } from '../../../fixtures/tasks'

interface ITodoProps {
    tasks : ITask[]
}

const Todo : React.FC<ITodoProps> = ({
    tasks
}) => {

    if(!tasks.length) {
        return <div>할 일 없음</div>
    }
    return (
        <div>
            {
                tasks.map(({id, title}) => (
                    <div key={id}>
                        <input type='checkbox' />
                        <p>{title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Todo;