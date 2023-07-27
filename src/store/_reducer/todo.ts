import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoProps {
  id: string;
  description: string;
  done: boolean;
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
    changeDone: (state: StateProps, action: PayloadAction<string>) => {
      const target = state.find((todo) => todo.id === action.payload);

      if (!target) return;

      target.done = !target.done;
    },
  },
});

export const { addTodo, deleteTodo, changeDone } = TodoSlice.actions;

export default TodoSlice.reducer;
