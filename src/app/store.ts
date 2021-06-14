import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../modules/Users/_redux/usersSlice';
import authReducer from '../modules/Auth/_redux/authSlice';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { useDispatch } from 'react-redux'

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','user'], //Things u want to persist
  blacklist: [], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
