import axios from 'axios';

export const fetchAdvice = async () => {
  try {
    const result = await axios.get('https://api.adviceslip.com/advice');
    const data = await result.data;

    return data;
  } catch (error) {
    throw error;
  }
};
