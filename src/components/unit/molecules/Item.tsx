import React from 'react';

import { TodoProps } from '../../../store/_reducer/todo';

import { Box, useStyleConfig } from '@chakra-ui/react';

import CustomButton from '../atoms/Button';

import CheckBox from '../atoms/CheckBox';

export type TodoItemProps = TodoProps & {
  handleCheckBox: (id: string) => void;
  handleDelete: (id: string, description: string, done: boolean) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  description,
  done,
  id,
  handleCheckBox,
  handleDelete,
}) => {
  const themes = useStyleConfig('Card');

  return (
    <Box __css={themes}>
      <CheckBox
        isChecked={done}
        onChange={() => handleCheckBox(id)}
        style={{ width: '20px' }}
      />
      <Box textDecoration={done ? 'line-through' : 'none'}>{description}</Box>
      <CustomButton
        onClick={() => handleDelete(id, description, done)}
        size="sm"
        width={20}
      >
        완료
      </CustomButton>
    </Box>
  );
};

export default TodoItem;
