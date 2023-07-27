import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
import type { TypedUseSelectorHook } from 'react-redux';

import todoReducer from './_reducer/todo';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({
  todo: todoReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo'],
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
