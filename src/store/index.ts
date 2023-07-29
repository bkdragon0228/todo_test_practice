import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from 'react-redux';

import todoReducer from './_reducer/todo';
import modalReducer from './_reducer/modal';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({
  todo: todoReducer,
  modal: modalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo', 'modal'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV! !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
