import React, { useCallback } from 'react';

import { openModal, setTodo } from '../../store/_reducer/modal';
import { addTodo, deleteTodo, changeDone } from '../../store/_reducer/todo';
import { useAppSelector, useAppDispatch } from '../../store';
import { TodoProps } from '../../store/_reducer/todo';

import uuid from 'react-uuid';
import Todo from './todo';
import TodoForm from './todoForm';
import CompleteModal from '../modal/CompleteModal';

const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo);

  const handleSubmit = useCallback(
    async (value: string) => {
      if (!value) return;

      const newTask: TodoProps = {
        id: uuid(),
        description: value,
        done: false,
      };

      dispatch(addTodo(newTask));
    },
    [dispatch]
  );

  const handleCheckBox = useCallback(
    (id: string) => dispatch(changeDone(id)),
    [dispatch]
  );

  const handleComplete = useCallback(
    (id: string, description: string, done: boolean) => {
      if (window.confirm('완료 목록에 등록하시겠습니까?')) {
        dispatch(setTodo({ description, done, id }));
        dispatch(openModal());
      }

      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  return (
    <div>
      <h2>할 일</h2>
      <TodoForm handleSubmit={handleSubmit} />
      <Todo
        todos={todos}
        handleCheckBox={handleCheckBox}
        handleComplete={handleComplete}
      />
      <CompleteModal />
    </div>
  );
};

export default TodoContainer;
