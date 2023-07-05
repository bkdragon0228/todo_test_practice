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

        </div>
    );
};

export default Todo;