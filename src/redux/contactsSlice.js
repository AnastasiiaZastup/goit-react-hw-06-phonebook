import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      prepare(value) {
        return {
          payload: {
            id: nanoid(),
            name: value.name,
            number: value.number,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },

    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
