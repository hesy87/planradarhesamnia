import { createSlice } from '@reduxjs/toolkit'
import { ticketsData } from '../Mocks/tickets'

// initial data comes from mock data and attach to redux
const initialState = {
  items: ticketsData,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    //add new ticket to store
    addTicket: (state, action) => {
      //create random id for new ticket
      const id = Math.random();
      const newTicket = { id, ...action.payload };
      state.items.unshift(newTicket);
      //put the new ticket in first of the array to show better in Tickets list component
    },
    //delete ticket from the store by id
    deleteTicket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    //get a single ticket data used in edit feature
    getOneTicket: (state, action) => {
      const ticket = state.items.find((item) => item.id === action.payload);
      state.selectedTicket = ticket;
    },
    //filter to find how many tickets have new status and list them 
    newTicketFilter: (state) => {
      state.newTickets = state.items.filter((item) => item.status === 'new');
      state.items = state.newTickets
    },
    //after editing update the state
    updateTicket: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            subject: action.payload.subject,
            status: action.payload.status,
            priority: action.payload.priority,
            description: action.payload.description,
          };
        }
        return item;
      });
      //one element update other doesnot match returned
    },
  },
});

export const { addTicket, deleteTicket, getOneTicket, updateTicket, newTicketFilter } =
  dataSlice.actions;
export default dataSlice.reducer;