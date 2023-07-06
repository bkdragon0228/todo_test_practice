import React from 'react';

import { ITask } from '../../../fixtures/tasks'
import TodoItem from './todoItem';

interface ITodoProps {
    tasks : ITask[];
    handleClickSubmit : () => void;
    handleChange : (value : string) => void;
    handleCheckBox : (id : number) => void;
}

const Todo : React.FC<ITodoProps> = ({
    tasks,
    handleChange,
    handleClickSubmit,
    handleCheckBox
}) => {

    return (
        <div>
             <div>
                <input
                    type='text'
                    placeholder='contents'
                    data-testid='todo-input'
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button
                    onClick={handleClickSubmit}
                >
                    등록
                </button>
            </div>
            {
                !tasks.length ? (
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