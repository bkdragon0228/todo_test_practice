import { act } from '@testing-library/react';
import { useState, useEffect } from 'react';

export default function useFetchData<T>(
  fetchFunc: () => Promise<T>,
  ininalState: T
) {
  const [data, setData] = useState<T>(ininalState);
  const [isError, setIsError] = useState<boolean>(false);

  const wrappingAct = (callback: () => void) => act(() => callback());

  const fetchData = async () => {
    try {
      const result = await fetchFunc();
      wrappingAct(() => setData(result));
      wrappingAct(() => setIsError(false));
    } catch (error) {
      // console.log(error);
      wrappingAct(() => setIsError(true));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isError,
    fetchData,
  };
}
