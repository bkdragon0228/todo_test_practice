import React, { useState } from 'react';

import { Flex } from '@chakra-ui/react';

import CustomButton from '../unit/atoms/Button';

import CustonInput from '../unit/atoms/Input';

interface ITodoForm {
  handleSubmit: (value: string) => void;
}

const TodoForm: React.FC<ITodoForm> = ({ handleSubmit }) => {
  const [content, setContent] = useState<string>('');

  const onClick = () => {
    handleSubmit(content);
    setContent('');
  };

  return (
    <Flex gap={0}>
      <CustonInput
        type="text"
        placeholder="할 일"
        data-testid="todo-input"
        width={300}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <CustomButton onClick={onClick} isDisabled={!content}>
        등록
      </CustomButton>
    </Flex>
  );
};

export default TodoForm;
