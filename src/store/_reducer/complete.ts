import { createSlice } from '@reduxjs/toolkit';

import { TodoProps } from './todo';

type CompleteProps = Omit<TodoProps, 'done'> & {
  pay: number;
};

export type StateProps = CompleteProps[];

const CompleteSlice = createSlice({
  name: 'complete',
  initialState: [] as StateProps,
  reducers: {},
});

export const {} = CompleteSlice.actions;

export default CompleteSlice.reducer;
