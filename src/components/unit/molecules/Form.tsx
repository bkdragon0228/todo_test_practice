import React, { useState } from 'react';

import { FormControl, FormControlProps, InputProps } from '@chakra-ui/react';

import CustonInput from '../atoms/Input';

import CustomButton, { Props } from '../atoms/Button';

export interface FormProps {
  form: Omit<FormControlProps, 'onSubmit'> & {
    handleSubmit: (value: string) => void;
  };
  input: InputProps;
  button: Props;
}

const Form: React.FC<FormProps> = ({ button, form, input }) => {
  const [content, setContent] = useState<string>('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit(content);
        setContent('');
      }}
    >
      <FormControl display={'flex'} flexDir={'row'} {...form}>
        <CustonInput
          value={content}
          onChange={(e) => setContent(e.target.value)}
          {...input}
        />
        <CustomButton isDisabled={!content} {...button} />
      </FormControl>
    </form>
  );
};

export default Form;
