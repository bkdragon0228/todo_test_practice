import React from 'react';
import { ITask } from '../../../fixtures/tasks';

import Todo from './todo';
import TodoForm from './todoForm';
import useFetchData from '../../hooks/useFetchData';
import axios from 'axios';

const TodoContainer = () => {
    const [data, setData, isError] = useFetchData<ITask[]>([])

    const showError = () => {
      console.error('할 일을 입력해주세요.')
    }

    const handleClickSubmit = async (value : string) => {
      const newTask : ITask = {
        id : Math.random(),
        title : value,
        done : false
      }
      try {
        const response = await axios.post("https://localhost:3000/tasks", {
          headers : {
            'Content-Type': 'application/json'
          },
          body : {
            task : newTask
          }
        })
        const result = await response.data

        setData(result)
      } catch (error) {
        console.log('Network Error')
      }
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

    const handleDelete = async (id : number) => {
      try {
        const response = await axios.delete(`https://localhost:3000/tasks/${id}`)
        const result = await response.data

        setData(result)
      } catch (error) {
        console.log('Network error')
      }
    }

    if(isError) {
      return (
        <div data-testid='errorMessage'>Network error</div>
      )
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