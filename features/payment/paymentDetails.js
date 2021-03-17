import { createSlice } from '@reduxjs/toolkit'

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        personName: '_',
        selectedNumbers: [],
        valueBought: 0,
        ticketNumber: ''
    },
    reducers: {
        clickedOnReserved: (state, action) => {
            //console.log('i got here somehow');
            //console.log(action.payload.personName);
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.personName = action.payload.personName,
                state.selectedNumbers = action.payload.selectedNumbers,
                state.valueBought = action.payload.valueBought,
                state.ticketNumber = action.payload.ticketNumber
        },
    }
})

export const { clickedOnReserved } = paymentSlice.actions

export const selectPaymentDetails = state => state.payment

export default paymentSlice.reducer