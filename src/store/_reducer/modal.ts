import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoProps } from './todo';

export interface ModalProps {
  isOpen: boolean;
  todo: TodoProps;
}

export type StateProps = ModalProps;

const initialState: ModalProps = {
  isOpen: false,
  todo: {
    description: '',
    done: false,
    id: '0',
  },
};

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: StateProps) => {
      state.isOpen = true;
    },
    closeModal: (state: StateProps) => {
      state.isOpen = false;
    },
    setTodo: (state: StateProps, action: PayloadAction<TodoProps>) => {
      state.todo = action.payload;
    },
  },
});

export const { closeModal, openModal, setTodo } = ModalSlice.actions;

export default ModalSlice.reducer;
