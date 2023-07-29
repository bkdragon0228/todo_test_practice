import React from 'react';

import axios from 'axios';
import useFetchData from '../../hooks/useFetchData';

const AdviceContainer = () => {
  const fetchAdvice = async () => {
    try {
      const result = await axios.get('https://api.adviceslip.com/advice');
      const data = await result.data;

      return data;
    } catch (error) {
      console.log(error);
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

  console.log(data);

  return <div>명언</div>;
};

export default AdviceContainer;
