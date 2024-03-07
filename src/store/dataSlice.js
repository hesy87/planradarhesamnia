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
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        getOneTicket: (state, action) => {
            const ticket = state.items.find(item => item.id === action.payload);
            state.selectedTicket = ticket
        },
        updateTicket: (state, action) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload.id) {
                    return {
                      ...item,
                      subject: action.payload.subject,
                      status: action.payload.status,
                      priority: action.payload.priority,
                      description: action.payload.description,
                    };
                }
            })
        }
    },
})

export const { addTicket, deleteTicket, getOneTicket, updateTicket } =
  dataSlice.actions;
export default dataSlice.reducer;