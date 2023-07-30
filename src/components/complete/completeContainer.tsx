import React, { useMemo } from 'react';

import { useAppSelector } from '../../store';

import CompleteItem from './completeItem';

const CompleteContainer = () => {
  const complete = useAppSelector((state) => state.complete);

  const totalMoney = useMemo(
    () => complete.reduce((acc, cur) => (acc += cur.pay), 0),
    [complete]
  );
  return (
    <>
      <h2>완료한 일</h2>
      <div>
        {complete.map((item) => (
          <CompleteItem
            key={item.id}
            description={item.description}
            handleDelete={() => {}}
            pay={item.pay}
          />
        ))}
      </div>
      <div>총 : {totalMoney}원</div>
    </>
  );
};

export default CompleteContainer;
