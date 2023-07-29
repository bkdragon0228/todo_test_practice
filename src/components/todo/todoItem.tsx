import React from 'react';
import { TodoProps } from '../../store/_reducer/todo';

import styles from './todo.module.scss';

type TodoItemProps = TodoProps & {
  handleCheckBox: (id: string) => void;
  handleDelete: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  description,
  id,
  done,
  handleCheckBox,
  handleDelete,
}) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
      className={styles.todoItem}
    >
      <input type="checkbox" onChange={() => handleCheckBox(id)} />
      <div
        style={{
          textDecoration: done ? 'line-through' : 'none',
        }}
      >
        {description}
      </div>
      <button onClick={() => handleDelete(id)}>완료</button>
    </div>
  );
};

export default TodoItem;
