import React from 'react';

import { ITask } from '../../../fixtures/tasks'
import TodoItem from './todoItem';

interface ITodoProps {
    tasks : ITask[];
    handleCheckBox : (id : number) => void;
    handleDelete : (id : number) => void;
}

const Todo : React.FC<ITodoProps> = ({
    tasks,
    handleCheckBox,
    handleDelete
}) => {
    return (
        <div>
            {
                !tasks?.length ? (
                    <div>
                        할 일 없음
                    </div>
                ) : (
                    <div>
                    {
                        tasks.map((props) => (
                            <TodoItem
                                key={props.id}
                                title={props.title}
                                done={props.done}
                                id={props.id}
                                handleCheckBox={handleCheckBox}
                                handleDelete={handleDelete}
                            />
                        ))
                    }
                </div>
                )
            }
        </div>
    );
};

export default Todo;