import React, { useState } from 'react';
import { ITask } from '../../../fixtures/tasks';

import Todo from './todo';
import TodoForm from './todoForm';
import useFetchData from '../../hooks/useFetchData';

const TodoContainer = () => {
    // const [tasks, setTasks] = useState<ITask[]>([]) // 실제론 api 통신을 통해 얻을 것.

    const [data, setData] = useFetchData<ITask[]>([])

    const showError = () => {
      console.error('할 일을 입력해주세요.')
    }

    const handleClickSubmit = (value : string) => {
      setData((prev) => [...prev, {
        id : Math.random(),
        title : value,
        done : false
      }])
    }

    const handleCheckBox = (id : number) => {
        const item = data.filter((task) => task.id === id)
        const filterd = data.filter((tasks) => tasks.id !== id)

        setData([...filterd, {
          id : item[0].id,
          title : item[0].title,
          done : !item[0].done
        }])
    }

    const handleDelete = (id : number) => {
      setData((prev) => [
        ...prev.filter((task) => task.id !== id)
      ])
    }
    return (
      <div>
            <h2>할 일</h2>
            <TodoForm
              showError={showError}
              handleSubmit={handleClickSubmit}
            />
            <Todo
              tasks={data}
              handleCheckBox={handleCheckBox}
              handleDelete={handleDelete}
            />
      </div>
    );
};

export default TodoContainer;