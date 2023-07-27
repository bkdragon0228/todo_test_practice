import React from 'react';
import uuid from 'react-uuid';
import { ITask } from '../../../fixtures/tasks';

import Todo from './todo';
import TodoForm from './todoForm';
import useFetchData from '../../hooks/useFetchData';
import axios from 'axios';

import { addTodo, deleteTodo, changeDone } from '../../store/_reducer/todo';
import { useAppSelector, useAppDispatch } from '../../store';
import { TodoProps } from '../../store/_reducer/todo';

const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo);

  const handleSubmit = async (value: string) => {
    if (!value) return;

    const newTask: TodoProps = {
      id: uuid(),
      description: value,
      done: false,
    };

    dispatch(addTodo(newTask));
  };

  const handleCheckBox = (id: string) => dispatch(changeDone(id));

  const handleDelete = async (id: string) => dispatch(deleteTodo(id));

  return (
    <div>
      <h2>할 일</h2>
      <TodoForm handleSubmit={handleSubmit} />
      <Todo
        todos={todos}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoContainer;
