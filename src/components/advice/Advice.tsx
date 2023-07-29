import React from 'react';

export interface AdviceProps {
  id: number;
  advice: string;
}

const Advice: React.FC<AdviceProps> = ({ advice, id }) => {
  return <div></div>;
};

export default Advice;
