import React, { memo } from 'react';

import { TodoProps } from '../../store/_reducer/todo';

import { Box, useStyleConfig } from '@chakra-ui/react';

import styles from './todo.module.scss';

import CustomButton from '../atoms/Button';

type TodoItemProps = TodoProps & {
  handleCheckBox: (id: string) => void;
  handleDelete: (id: string, description: string, done: boolean) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  description,
  id,
  done,
  handleCheckBox,
  handleDelete,
}) => {
  // console.log(`${description} 리렌더링`);

  const themes = useStyleConfig('Card');

  return (
    <Box
      // style={{
      //   display: 'flex',
      // }}
      // className={styles.todoItem}
      __css={themes}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => handleCheckBox(id)}
      />
      <div
        style={{
          textDecoration: done ? 'line-through' : 'none',
        }}
      >
        {description}
      </div>
      <CustomButton
        onClick={() => handleDelete(id, description, done)}
        size="sm"
      >
        완료
      </CustomButton>
    </Box>
  );
};

export default memo(TodoItem);
