import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContacts: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (value) => {
        return {
          payload: {
            id: nanoid(),
            ...value,
          },
        };
      },
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContacts, deleteContacts } = slice.actions;

export default slice.reducer;
