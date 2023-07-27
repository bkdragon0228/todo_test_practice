import React from 'react';

import TodoReducer, {
  StateProps,
  TodoProps,
} from '../../src/store/_reducer/todo';

import { addTodo, changeDone, deleteTodo } from '../../src/store/_reducer/todo';

describe('todoReducer', () => {
  const initialState: StateProps = [
    { description: 'sample', done: false, id: '1' },
  ];

  const sampleItem: TodoProps = {
    description: 'samplesample',
    done: false,
    id: '2',
  };

  context('addTodo 사용하면', () => {
    it('새 할 일이 추가된다.', () => {
      const newState = TodoReducer(initialState, addTodo(sampleItem));

      expect(newState).toHaveLength(2);
    });
  });

  context('changeDone 사용하면', () => {
    it('done 값이 바뀐다.', () => {
      const current = initialState[0].done;

      const newState = TodoReducer(initialState, changeDone('1'));

      expect(current).not.toBe(newState[0].done);
    });
  });

  context('deleteTodo 사용하면', () => {
    it('할 일이 삭제된다.', () => {
      const newState = TodoReducer(initialState, deleteTodo('1'));

      expect(newState).toHaveLength(0);
    });
  });
});
