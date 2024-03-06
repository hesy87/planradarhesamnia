import { createSlice } from '@reduxjs/toolkit'
import { ticketsData } from '../Mocks/tickets'

const initialState = {
    items : ticketsData
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    storeData: (state, action) => {
        state.items.push(action.payload)
    },
    loadData: (state) => {
        state.items = state.ticketsData
    }
})

export const { storeData, loadData } = dataSlice.actions;
export default dataSlice.reducer;