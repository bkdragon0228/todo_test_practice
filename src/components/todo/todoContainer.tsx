import React, { useState } from 'react';
import { ITask } from '../../../fixtures/tasks';

import Todo from './todo';

const TodoContainer = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [content, setContent] = useState<string>('')

    const handleChangeContent = (value : string) => {
      setContent(value)
    }

    const handleClickSubmit = () => {
      if(content === '') {
        console.error('할 일을 입력해주세요.')
      } else {
        setTasks((prev) => [...prev, {
          id : Math.random(),
          title : content
        }])
      }
    }

    return (
      <div>
            <h2>할 일</h2>
            <Todo
              handleClickSubmit={handleClickSubmit}
              tasks={tasks}
              handleChange={handleChangeContent}
            />
      </div>
    );
};

export default TodoContainer;