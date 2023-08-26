import React from 'react';
import CustomButton from '../unit/atoms/Button';

export interface AdviceProps {
  id: number;
  advice: string;
  handleChangeAdvice: () => void;
}

const Advice: React.FC<AdviceProps> = ({ advice, id, handleChangeAdvice }) => {
  return (
    <div key={id}>
      <div data-testid="advice">{advice}</div>
      <CustomButton
        data-testid="advice_change_btn"
        onClick={handleChangeAdvice}
      >
        변경
      </CustomButton>
    </div>
  );
};

export default Advice;
