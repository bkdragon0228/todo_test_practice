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
    deleteTodo: (state: StateProps, action: PayloadAction<string>) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
