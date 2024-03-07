import { createSlice } from '@reduxjs/toolkit'
import { ticketsData } from '../Mocks/tickets'

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
        }
    },
})

export const { addTicket } = dataSlice.actions;
export default dataSlice.reducer;