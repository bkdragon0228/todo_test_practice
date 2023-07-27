import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoProps {
  id: string;
  description: string;
}

export type StateProps = TodoProps[];

const TodoSlice = createSlice({
  name: 'Survey',
  initialState: [] as StateProps,
  reducers: {},
});

export const {} = TodoSlice.actions;

export default TodoSlice.reducer;
