import React from 'react';

import { closeModal } from '../../store/_reducer/modal';

import { useAppDispatch, useAppSelector } from '../../store';

import styles from './CompleteModal.module.scss';

const CompleteModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const todo = useAppSelector((state) => state.modal.todo);

  const onClickClose = () => {
    if (window.confirm('내용이 저장 안됩니다. 나가시겠습니까?')) {
      dispatch(closeModal());
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.delete_btn} onClick={onClickClose}>
          X
        </button>
        <table>
          <thead>
            <tr>
              <th>할 일</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todo.description}</td>
              <td>시간 입력하기</td>
            </tr>
          </tbody>
        </table>
        <button className={styles.submit_btn}>확인</button>
      </div>
    </div>
  );
};

export default CompleteModal;
