import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsAPI,
  addContactAPI,
  deleteContactAPI,
} from 'store/operations/contactsOpps';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsAPI.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchContactsAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContactsAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactAPI.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(addContactAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContactAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // .addCase(deleteContact.pending, (state, action) => {})
      .addCase(deleteContactAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
