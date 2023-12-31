import React from 'react';

import axios from 'axios';

import useFetchData from '../../hooks/useFetchData';

import Advice from './Advice';

const AdviceContainer = () => {
  const fetchAdvice = async () => {
    try {
      const result = await axios.get('https://api.adviceslip.com/advice');
      const data = await result.data;

      return data;
    } catch (error) {
      throw error;
    }
  };

  const {
    data,
    fetchData: refetchData,
    isError,
  } = useFetchData<{
    slip_id: number;
    advice: string;
  }>(fetchAdvice, { advice: '', slip_id: 0 });

  const handleChangeAdvice = () => {
    refetchData();
  };

  if (isError) {
    return <div data-testid="advice_error">서버 에러</div>;
  }

  return (
    <Advice
      id={data?.slip_id}
      advice={data?.advice}
      handleChangeAdvice={handleChangeAdvice}
    />
  );
};

export default AdviceContainer;
