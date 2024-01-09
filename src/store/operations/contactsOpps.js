import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchContactsAPI = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await toast.promise(
        axios.get('/contacts'),
        {
          loading: 'Fetching contacts',
          success: 'Success',
          error: 'Error :(',
        },
        {
          success: {
            duration: 2000,
            icon: '🔥',
          },
          error: {
            duration: 200,
          },
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactAPI = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await toast.promise(axios.post('/contacts', contact), {
        loading: 'loading',
        success: 'Added',
        error: 'Error',
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactAPI = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await toast.promise(
        axios.delete(`/contacts/${contactId}`),
        {
          loading: 'loading',
          success: 'Deleted',
          error: 'Error',
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
