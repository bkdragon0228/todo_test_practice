import { createSlice } from '@reduxjs/toolkit';

export interface ModalProps {
  isOpen: boolean;
}

export type StateProps = ModalProps;

const initialState: ModalProps = {
  isOpen: false,
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
  },
});

export const { closeModal, openModal } = ModalSlice.actions;

export default ModalSlice.reducer;
