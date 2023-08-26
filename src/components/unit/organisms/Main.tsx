import React from 'react';

import { Box } from '@chakra-ui/react';

import { AdviceProps } from '../molecules/Advice';

import { FormProps } from '../molecules/Form';

import TodoItem, { TodoItemProps } from '../molecules/Item';

import { TodoProps } from '../../../store/_reducer/todo';

import { CompleteProps } from '../../../store/_reducer/complete';

import Advice from '../molecules/Advice';

import Form from '../molecules/Form';

export interface MainProps {
  advice: AdviceProps;
  form: FormProps;
  todos: {
    item: TodoProps[];
    handler: {
      handleCheckBox: (id: string) => void;
      handleDelete: (id: string, description: string, done: boolean) => void;
    };
  };
  completes: CompleteProps[];
}

const Main: React.FC<MainProps> = ({ advice, form, completes, todos }) => {
  return (
    <Box>
      <Advice {...advice} />
      <Form {...form} />
      <Box>
        {todos?.item.map((props) => (
          <TodoItem
            key={props.id}
            description={props.description}
            done={props.done}
            id={props.id}
            handleCheckBox={todos.handler.handleCheckBox}
            handleDelete={todos.handler.handleDelete}
          />
        ))}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Main;
