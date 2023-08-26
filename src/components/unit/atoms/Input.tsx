import React from 'react';

import { Input, InputProps } from '@chakra-ui/react';

type Props = InputProps;

const CustonInput = (props: Props) => {
  return <Input {...props} />;
};

export default CustonInput;
