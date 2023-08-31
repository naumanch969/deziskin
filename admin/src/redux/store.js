import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducers from './reducers/user';
import orderReducers from './reducers/order';
import productReducers from './reducers/product';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'admin', version: 1, storage };
const rootReducer = combineReducers({ user: userReducers, order: orderReducers, product: productReducers });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);