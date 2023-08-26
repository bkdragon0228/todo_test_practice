import React from 'react';

import { FormControl, FormControlProps, InputProps } from '@chakra-ui/react';

import CustonInput from '../atoms/Input';
import CustomButton, { Props } from '../atoms/Button';

export interface FormProps {
  form: FormControlProps;
  input: InputProps;
  button: Props;
}

const Form: React.FC<FormProps> = ({ button, form, input }) => {
  return (
    <FormControl display={'flex'} flexDir={'row'} {...form}>
      <CustonInput {...input} />
      <CustomButton {...button} />
    </FormControl>
  );
};

export default Form;
