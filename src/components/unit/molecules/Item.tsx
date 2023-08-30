import React from 'react';

import { TodoProps } from '../../../store/_reducer/todo';

import { Box, calc, useStyleConfig } from '@chakra-ui/react';

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
    <Box __css={themes} width={'380px'}>
      <Box flex="1 1 0">
        <CheckBox isChecked={done} onChange={() => handleCheckBox(id)} />
      </Box>
      <Box
        textDecoration={done ? 'line-through' : 'none'}
        padding={4}
        flex="8 1 0"
        wordBreak={'break-word'}
      >
        {description}
      </Box>
      <CustomButton
        onClick={() => handleDelete(id, description, done)}
        size="sm"
        flex="1 1 0"
      >
        완료
      </CustomButton>
    </Box>
  );
};

export default TodoItem;
