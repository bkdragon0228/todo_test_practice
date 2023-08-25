import React from 'react';

import { Checkbox, CheckboxProps } from '@chakra-ui/react';

type Props = CheckboxProps;

const CheckBox = (props: Props) => {
  return <Checkbox colorScheme="purple" {...props} />;
};

export default CheckBox;
