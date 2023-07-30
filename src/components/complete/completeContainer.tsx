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
      <div>
        {complete.map((item) => (
          <CompleteItem
            key={item.id}
            description={item.description}
            pay={item.pay}
          />
        ))}
      </div>
      <div>총 : {totalMoney}</div>
    </>
  );
};

export default CompleteContainer;
