import React from 'react';

import Nav, { NavProps } from '../organisms/Nav';

import Main, { MainProps } from '../organisms/Main';
import { Box } from '@chakra-ui/react';

// footer

interface AppTemplateProps {
  nav: NavProps;
  main: MainProps;
}

const AppTemplate: React.FC<AppTemplateProps> = ({ main, nav }) => {
  return (
    <Box>
      <Nav {...nav} />
      <Main {...main} />
      {/* footer */}
    </Box>
  );
};

export default AppTemplate;
