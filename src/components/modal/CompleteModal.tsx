import React from 'react';

import { closeModal } from '../../store/_reducer/modal';

import { useAppDispatch, useAppSelector } from '../../store';

import styles from './CompleteModal.module.scss';

const CompleteModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  const onClickClose = () => dispatch(closeModal());

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.delete_btn} onClick={onClickClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default CompleteModal;
