import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { blogReducer } from './blogSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, blogReducer);

const store = configureStore({
  reducer: {
    blog: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
