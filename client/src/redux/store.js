import { configureStore, combineReducers, } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, PURGE, REGISTER, REHYDRATE, PAUSE, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './reducers/user'
import productReducer from './reducers/product'
import cartReducer from './reducers/cart'
import contactReducer from './reducers/contact'

const persistConfig = { key: 'client', version: 1, storage }
const rootReducer = combineReducers({ user: userReducer, product: productReducer, cart: cartReducer, contact: contactReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)