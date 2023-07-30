import React, { useState } from 'react';

import { Value } from 'react-time-picker/dist/cjs/shared/types';

import { closeModal } from '../../store/_reducer/modal';

import { useAppDispatch, useAppSelector } from '../../store';

import styles from './CompleteModal.module.scss';

import TimePickerContainer from '../timePicker/TimePicker';

import getMoney from '../../utils/getMoney';

const CompleteModal = () => {
  const dispatch = useAppDispatch();
  const [start, setStart] = useState<Value>('00:00');
  const [end, setEnd] = useState<Value>('00:00');
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const todo = useAppSelector((state) => state.modal.todo);

  const onClickClose = () => {
    if (window.confirm('내용이 저장 안됩니다. 나가시겠습니까?')) {
      dispatch(closeModal());
    }
  };

  const onSubmit = () => {
    if (!start || !end) {
      return;
    }

    const money = getMoney(start as string, end as string);
    console.log(money);
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
                  onChange={setStart}
                  value={start}
                />
                <TimePickerContainer
                  label="종료시간"
                  onChange={setEnd}
                  value={end}
                />
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
