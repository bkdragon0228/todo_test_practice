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
          title : content,
          done : false
        }])
      }
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
            <Todo
              handleClickSubmit={handleClickSubmit}
              tasks={tasks}
              handleChange={handleChangeContent}
              handleCheckBox={handleCheckBox}
            />
      </div>
    );
};

export default TodoContainer;