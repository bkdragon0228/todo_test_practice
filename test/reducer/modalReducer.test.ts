import React from 'react';

import { closeModal, openModal } from '../../src/store/_reducer/modal';

import modalReducer from '../../src/store/_reducer/modal';

describe('modalReducer', () => {
  const initalState = (isOpen: boolean) => {
    return {
      isOpen,
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
});
