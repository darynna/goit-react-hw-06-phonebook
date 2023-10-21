import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './reducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
  blacklist: ['filter']
});


export const persistor = persistStore(store)