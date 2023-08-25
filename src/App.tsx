import React from 'react';
import logo from './logo.svg';
import './App.css';

import AdviceContainer from './components/advice/adviceContainer';
import TodoContainer from './components/todo/todoContainer';
import CompleteContainer from './components/complete/completeContainer';
import Calender from './components/calender';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap={6}
      margin={'0 auto'}
      width={['100%', '100%', '100%', 1200]}
    >
      <Calender />
      <aside>
        <AdviceContainer />
      </aside>
      <main>
        <TodoContainer />
      </main>
      <article>
        <CompleteContainer />
      </article>
    </Flex>
  );
}

export default App;
