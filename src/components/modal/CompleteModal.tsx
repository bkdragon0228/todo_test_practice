import React from 'react';

import { closeModal } from '../../store/_reducer/modal';

import { addComplete } from '../../store/_reducer/complete';

import { useAppDispatch, useAppSelector } from '../../store';

import styles from './CompleteModal.module.scss';

import TimePickerContainer from '../timePicker/TimePicker';

import useTimes from '../../hooks/useTimes';

const CompleteModal = () => {
  const dispatch = useAppDispatch();
  const {
    start,
    end,
    errorMsg,
    getMoney,
    handleEndHour,
    handleErrorMsg,
    handleStartHour,
  } = useTimes({ start: '00:00', end: '00:00' });
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const todo = useAppSelector((state) => state.modal.todo);

  const onSubmit = () => {
    if (!start || !end) {
      return;
    }

    if (!getMoney(start, end)) {
      handleErrorMsg('시간을 다시 입력해주세요.');
      return;
    }

    handleErrorMsg('');

    const newComplete = {
      id: todo.id,
      description: todo.description,
      pay: getMoney(start, end) as number,
    };

    dispatch(addComplete(newComplete));
    dispatch(closeModal());
  };

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
              <th>완료한 일</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todo.description}</td>
              <td>
                <TimePickerContainer
                  label="시작시간"
                  onChange={handleStartHour}
                  value={start}
                />
                <TimePickerContainer
                  label="종료시간"
                  onChange={handleEndHour}
                  value={end}
                />
                {errorMsg && (
                  <div style={{ color: 'red', marginTop: '3px' }}>
                    {errorMsg}
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button className={styles.submit_btn} onClick={onSubmit}>
          확인
        </button>
      </div>
    </div>
  );
};

export default CompleteModal;
