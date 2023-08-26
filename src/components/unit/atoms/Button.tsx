import React, { PropsWithChildren } from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

type Props = ButtonProps;

const CustomButton = (props: PropsWithChildren<Props>) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};

export default CustomButton;
