import { createSlice } from '@reduxjs/toolkit'
import { ticketsData } from '../Mocks/tickets'

// initial data comes from mock data and attach to redux
const initialState = {
    items : ticketsData
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    //add new ticket to store
    storeData: (state, action) => {
        state.items.push(action.payload)
    },
})

export const { storeData, loadData } = dataSlice.actions;
export default dataSlice.reducer;