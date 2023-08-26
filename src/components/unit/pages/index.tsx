import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store';

import { addComplete, deleteComplete } from '../../../store/_reducer/complete';

import { openModal, closeModal, setTodo } from '../../../store/_reducer/modal';

import {
  TodoProps,
  addTodo,
  changeDone,
  deleteTodo,
} from '../../../store/_reducer/todo';

import { fetchAdvice } from '../../../utils/fetchFn';

import AppTemplate from '../_templates/AppTemplate';

import useFetchData from '../../../hooks/useFetchData';
import uuid from 'react-uuid';

const Index = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todo);
  const completes = useAppSelector((state) => state.complete);

  const {
    data,
    fetchData: refetchAdviceData,
    isError,
  } = useFetchData<{
    slip_id: number;
    advice: string;
  }>(fetchAdvice, { advice: '', slip_id: 0 });

  const handleSubmit = useCallback(
    async (value: string) => {
      console.log('이거 실행되냐');
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
    <AppTemplate
      main={{
        advice: {
          style: {},
          advice: data?.advice,
          id: data?.slip_id,
          handleChangeAdvice: () => refetchAdviceData(),
        },
        form: {
          button: {
            children: '등록',
            type: 'submit',
          },
          form: {
            handleSubmit,
          },
          input: {
            type: 'text',
            placeholder: '할 일',
            width: 300,
          },
        },
        completes,
        todos: {
          item: todos,
          handler: {
            handleCheckBox,
            handleDelete: handleComplete,
          },
        },
      }}
      nav={{}}
    />
  );
};

export default Index;
