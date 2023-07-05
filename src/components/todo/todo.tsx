import React from 'react';

import { ITask } from '../../../fixtures/tasks'

interface ITodoProps {
    tasks : ITask[]
}

const Todo : React.FC<ITodoProps> = ({
    tasks
}) => {

    return (
        <div>

        </div>
    );
};

export default Todo;