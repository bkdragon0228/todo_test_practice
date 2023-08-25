import React from 'react';

import TodoItem from './todoItem';

import { TodoProps } from '../../store/_reducer/todo';
import { Flex } from '@chakra-ui/react';

interface ITodoProps {
  todos: TodoProps[];
  handleCheckBox: (id: string) => void;
  handleComplete: (id: string, description: string, done: boolean) => void;
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
        <Flex flexDirection="column" gap="1rem">
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
        </Flex>
      )}
    </div>
  );
};

export default Todo;
