import React from 'react';
import uuid from 'react-uuid';

import Todo from './todo';
import TodoForm from './todoForm';

import { openModal, setTodo } from '../../store/_reducer/modal';

import { addTodo, deleteTodo, changeDone } from '../../store/_reducer/todo';
import { useAppSelector, useAppDispatch } from '../../store';
import { TodoProps } from '../../store/_reducer/todo';
import CompleteModal from '../modal/CompleteModal';

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

  const handleComplete = (id: string) => {
    if (window.confirm('완료 목록에 등록하시겠습니까?')) {
      const current = todos.find((todo) => todo.id === id);
      if (!current) return;

      dispatch(setTodo(current));
      dispatch(openModal());
    }

    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>할 일</h2>
      <TodoForm handleSubmit={handleSubmit} />
      <Todo
        todos={todos}
        handleCheckBox={handleCheckBox}
        handleDelete={handleComplete}
      />
      <CompleteModal />
    </div>
  );
};

export default TodoContainer;
