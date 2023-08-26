import React from 'react';

import { Box, useStyleConfig } from '@chakra-ui/react';

import CustomButton from '../atoms/Button';

interface CompleteItemProps {
  description: string;
  pay: number;
  id: string;
  handleDelete: (id: string) => void;
}

const Complete: React.FC<CompleteItemProps> = ({
  description,
  handleDelete,
  id,
  pay,
}) => {
  const themes = useStyleConfig('Card');
  return (
    <Box __css={themes}>
      <div>{description}</div>
      <div>{pay}</div>
      <CustomButton onClick={() => handleDelete(id)}>삭제</CustomButton>
    </Box>
  );
};

export default Complete;
