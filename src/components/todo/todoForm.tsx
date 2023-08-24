import React, { useState } from 'react';

import { Button } from '@chakra-ui/react';

import CustomButton from '../atoms/Button';

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
    <div>
      <input
        type="text"
        placeholder="할 일"
        data-testid="todo-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <CustomButton onClick={onClick} disabled={!content} size="sm">
        등록
      </CustomButton>
    </div>
  );
};

export default TodoForm;
