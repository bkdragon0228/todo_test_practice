import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

const Card = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
  },
  variants: {
    rounded: {
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  defaultProps: {
    variant: 'smooth',
  },
});

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: 'base',
      _focus: {
        border: 'none',
      },
    },
  },
  sizes: {
    sm: {
      field: {
        fontSize: 'sm',
        px: 4,
        py: 3,
      },
    },
    md: {
      filed: {
        fontSize: 'md',
        px: 6,
        py: 4,
      },
    },
    lg: {
      field: {
        fontSize: 'lg',
        px: 8,
        py: 6,
      },
    },
  },
  variants: {
    outline: {
      field: {
        border: '2px solid',
        borderColor: 'purple.500',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

export const theme = extendTheme({
  components: {
    Button: Button,
    Input: Input,
    Card: Card,
  },
});
