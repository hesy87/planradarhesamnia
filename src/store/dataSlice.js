import { createSlice } from '@reduxjs/toolkit'
import { ticketsData } from '../mocks/tickets'

// initial data comes from mock data and attach to redux
const initialState = {
  items: ticketsData,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    //add new ticket to store
    reducers: {
        addTicket: (state, action) => {
            const id = Math.random();
            const newTicket = {...action.payload, id}
            state.items.unshift(newTicket);
        },
        deleteTicket: (state, action) => {
            state.items = state.items.filter(item=> item.id !== action.payload)
        }
    },
})

export const { addTicket,deleteTicket } = dataSlice.actions;
export default dataSlice.reducer;