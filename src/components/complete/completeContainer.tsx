import React, { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';

import { deleteComplete } from '../../store/_reducer/complete';

import CompleteItem from './completeItem';

const CompleteContainer = () => {
  const complete = useAppSelector((state) => state.complete);
  const dispatch = useAppDispatch();

  const totalMoney = useMemo(
    () => complete.reduce((acc, cur) => (acc += cur.pay), 0),
    [complete]
  );

  const handleDelete = (id: string) => () => dispatch(deleteComplete(id));

  return (
    <>
      <h2>완료한 일</h2>
      <div>
        {complete.map((item) => (
          <CompleteItem
            key={item.id}
            description={item.description}
            handleDelete={handleDelete(item.id)}
            pay={item.pay}
          />
        ))}
      </div>
      <div>총 : {totalMoney}원</div>
    </>
  );
};

export default CompleteContainer;
