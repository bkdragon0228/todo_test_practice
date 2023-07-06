import React, { useState } from 'react';
import { ITask } from '../../../fixtures/tasks';

import Todo from './todo';
import TodoForm from './todoForm';

const TodoContainer = () => {
    const [tasks, setTasks] = useState<ITask[]>([]) // 실제론 api 통신을 통해 얻을 것.

    const showError = () => {
      console.error('할 일을 입력해주세요.')
    }

    const handleClickSubmit = (value : string) => {
      setTasks((prev) => [...prev, {
        id : Math.random(),
        title : value,
        done : false
      }])
    }

    const handleCheckBox = (id : number) => {
        const item = tasks.filter((task) => task.id === id)
        const filterd = tasks.filter((tasks) => tasks.id !== id)

        setTasks([...filterd, {
          id : item[0].id,
          title : item[0].title,
          done : !item[0].done
        }])
    }

    return (
      <div>
            <h2>할 일</h2>
            <TodoForm
              showError={showError}
              handleSubmit={handleClickSubmit}
            />
            <Todo
              tasks={tasks}
              handleCheckBox={handleCheckBox}
            />
      </div>
    );
};

export default TodoContainer;