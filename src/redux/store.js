import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlise';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

export const store = configureStore({
    reducer: {
        todos: persistReducer(persistConfig, todoReducer),
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)
