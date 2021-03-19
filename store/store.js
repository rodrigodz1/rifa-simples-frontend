import { configureStore } from '@reduxjs/toolkit'
import paymentReducer from '../features/payment/paymentDetails'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, paymentReducer);

export default configureStore({
    reducer: {
        payment: persistedReducer
    }
})