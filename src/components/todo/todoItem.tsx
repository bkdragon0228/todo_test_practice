import React, { memo } from 'react';

import { TodoProps } from '../../store/_reducer/todo';

import styles from './todo.module.scss';

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

  return (
    <div
      style={{
        display: 'flex',
      }}
      className={styles.todoItem}
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
      <button onClick={() => handleDelete(id, description, done)}>완료</button>
    </div>
  );
};

export default memo(TodoItem);
