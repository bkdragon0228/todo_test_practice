import React from 'react';
import CustomButton from '../atoms/Button';
import { Box, BoxProps } from '@chakra-ui/react';

interface AdviceProps {
  id: number;
  advice: string;
  handleChangeAdvice: () => void;
  style: BoxProps;
}

const Advice: React.FC<AdviceProps> = ({
  advice,
  handleChangeAdvice,
  id,
  style,
}) => {
  return (
    <Box key={id} display={'flex'} flexDir={'column'} gap={6} {...style}>
      <Box data-testid="advice">{advice}</Box>
      <CustomButton
        data-testid="advice_change_btn"
        onClick={handleChangeAdvice}
      >
        변경
      </CustomButton>
    </Box>
  );
};

export default Advice;
