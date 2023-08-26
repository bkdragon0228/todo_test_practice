import React, { memo } from 'react';

import { TodoProps } from '../../store/_reducer/todo';

import { Box, useStyleConfig } from '@chakra-ui/react';

import styles from './todo.module.scss';

import CustomButton from '../unit/atoms/Button';

import CheckBox from '../unit/atoms/CheckBox';

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
  console.log(`${description} 리렌더링`);

  const themes = useStyleConfig('Card');

  return (
    <Box
      // style={{
      //   display: 'flex',
      // }}
      // className={styles.todoItem}
      __css={themes}
    >
      <CheckBox
        isChecked={done}
        onChange={() => handleCheckBox(id)}
        style={{ width: '20px' }}
      />
      <div
        style={{
          textDecoration: done ? 'line-through' : 'none',
          width: '280px',
          padding: '8px',
          whiteSpace: 'normal',
        }}
      >
        {description}
      </div>
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

export default memo(TodoItem);
