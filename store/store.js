import { configureStore } from '@reduxjs/toolkit'
import paymentReducer from '../features/payment/paymentDetails'

export default configureStore({
    reducer: {
        payment: paymentReducer
    }
})