import { useState, useEffect } from 'react';

export default function useFetchData<T>(
  fetchFunc: () => Promise<T>,
  ininalState: T
) {
  const [data, setData] = useState<T>(ininalState);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const result = await fetchFunc();
      setData(result);
      setIsError(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
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
