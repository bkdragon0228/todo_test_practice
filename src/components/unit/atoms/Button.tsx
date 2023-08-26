import React, { PropsWithChildren } from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

export type Props = PropsWithChildren<ButtonProps>;

const CustomButton = (props: Props) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};

export default CustomButton;
