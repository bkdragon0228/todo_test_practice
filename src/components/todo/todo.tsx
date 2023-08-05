import React from 'react';

import TodoItem from './todoItem';

import { TodoProps } from '../../store/_reducer/todo';

interface ITodoProps {
  todos: TodoProps[];
  handleCheckBox: (id: string) => void;
  handleComplete: (id: string) => void;
}

const Todo: React.FC<ITodoProps> = ({
  todos,
  handleCheckBox,
  handleComplete,
}) => {
  return (
    <div>
      {!todos?.length ? (
        <div>할 일 없음</div>
      ) : (
        <div>
          {todos.map((props) => (
            <TodoItem
              key={props.id}
              description={props.description}
              done={props.done}
              id={props.id}
              handleCheckBox={handleCheckBox}
              handleDelete={handleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
