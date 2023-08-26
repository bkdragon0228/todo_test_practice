import React from 'react';

import { Box } from '@chakra-ui/react';

import { AdviceProps } from '../molecules/Advice';

import { FormProps } from '../molecules/Form';

import { TodoItemProps } from '../molecules/Item';

import Advice from '../molecules/Advice';

import Form from '../molecules/Form';

import TodoItem from '../molecules/Item';

export interface MainProps {
  advice: AdviceProps;
  form: FormProps;
  todoItem: TodoItemProps;
}

const Main: React.FC<MainProps> = ({ advice, form, todoItem }) => {
  return (
    <Box>
      <Advice {...advice} />
      <Form {...form} />
      <TodoItem {...todoItem} />
    </Box>
  );
};

export default Main;
