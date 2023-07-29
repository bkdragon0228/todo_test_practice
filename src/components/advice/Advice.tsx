import React from 'react';

export interface AdviceProps {
  id: number;
  advice: string;
  handleChangeAdvice: () => void;
}

const Advice: React.FC<AdviceProps> = ({ advice, id, handleChangeAdvice }) => {
  return (
    <div key={id}>
      <div data-testid="advice">{advice}</div>
      <button data-testid="advice_change_btn" onClick={handleChangeAdvice}>
        변경
      </button>
    </div>
  );
};

export default Advice;
