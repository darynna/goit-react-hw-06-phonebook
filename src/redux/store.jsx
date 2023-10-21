import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './reducer';
import {
    persistStore ,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
  blacklist: ['filter'],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)