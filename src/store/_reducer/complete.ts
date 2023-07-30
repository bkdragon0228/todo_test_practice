import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TodoProps } from './todo';

type CompleteProps = Omit<TodoProps, 'done'> & {
  pay: number;
};

export type StateProps = CompleteProps[];

const CompleteSlice = createSlice({
  name: 'complete',
  initialState: [] as StateProps,
  reducers: {
    addComplete: (state: StateProps, action: PayloadAction<CompleteProps>) => {
      state.push(action.payload);
    },
    deleteComplete: (state: StateProps, action: PayloadAction<string>) => {
      const newState = state.filter((item) => item.id !== action.payload);

      return newState;
    },
  },
});

export const { addComplete, deleteComplete } = CompleteSlice.actions;

export default CompleteSlice.reducer;
