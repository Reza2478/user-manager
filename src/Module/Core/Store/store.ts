import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoritesApi, userApi } from '@/Module/User/Query';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { favoritesReducer, usersReducer } from '@/Module/User/Store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
  blacklist: ['users'],
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  users: usersReducer,
  [userApi.reducerPath]: userApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware, favoritesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;