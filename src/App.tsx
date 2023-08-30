import React from 'react';
import logo from './logo.svg';
import './App.css';

import AdviceContainer from './components/advice/adviceContainer';
import TodoContainer from './components/todo/todoContainer';
import CompleteContainer from './components/complete/completeContainer';
import Calender from './components/calender';
import { Box, Flex } from '@chakra-ui/react';
import Index from './components/unit/pages';

function App() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap={6}
      margin={'0 auto'}
      width={['100%', '100%', '100%', 1200]}
      position={'relative'}
      boxSizing="border-box"
    >
      <Box
        as="aside"
        position={{ lg: 'absolute', md: 'relative' }}
        top={0}
        left={0}
      >
        <Calender />
      </Box>
      {/* <nav>
        <AdviceContainer />
      </nav>
      <main>
        <TodoContainer />
      </main>
      <article>
        <CompleteContainer />
      </article> */}
      <Index />
    </Flex>
  );
}

export default App;
