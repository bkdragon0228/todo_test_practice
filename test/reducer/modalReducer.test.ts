import React from 'react';

import { closeModal, openModal, setTodo } from '../../src/store/_reducer/modal';

import modalReducer from '../../src/store/_reducer/modal';

describe('modalReducer', () => {
  const initalState = (isOpen: boolean) => {
    return {
      isOpen,
      todo: {
        description: '',
        done: false,
        id: '0',
      },
    };
  };

  context('openModal', () => {
    it('상태값이 true가 된다.', () => {
      const newState = modalReducer(initalState(false), openModal());

      expect(newState.isOpen).toBe(true);
    });
  });

  context('closeModal', () => {
    it('상태값이 false가 된다.', () => {
      const newState = modalReducer(initalState(true), closeModal());

      expect(newState.isOpen).toBe(false);
    });
  });

  context('setTodo', () => {
    it('modal창에 보일 todo가 저장된다.', () => {
      const newState = modalReducer(
        initalState(true),
        setTodo({ description: 'sample', done: true, id: '1' })
      );

      expect(newState.todo.description).toBe('sample');
      expect(newState.todo.done).toBe(true);
      expect(newState.todo.id).toBe('1');
    });
  });
});
