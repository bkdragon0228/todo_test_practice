import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoProps {
  id: string;
  description: string;
  done: false;
}

export type StateProps = TodoProps[];

const TodoSlice = createSlice({
  name: 'Survey',
  initialState: [] as StateProps,
  reducers: {
    addTodo: (state: StateProps, action: PayloadAction<TodoProps>) => {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
