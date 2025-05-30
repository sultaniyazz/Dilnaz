import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  books: [],
  loading: false,
  error: null,
  isAdminError: false,
  isAdminLoad: false
};

const dataSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchingbooks: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchedbooks: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    fetchbooksError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchingAdminData: (state) => {
      state.isAdminLoad = true;
    },
    fetchedAdminData: (state, action) => {
      state.isAdminLoad = false;
      state.users = action.payload;
    },
    fetchAdminError: (state, action) => {
      state.isAdminLoad = false;
      state.isAdminError = action.payload;
    },
  },
});

export const { fetchingbooks, fetchedbooks, fetchbooksError, fetchAdminError, fetchedAdminData, fetchingAdminData } = dataSlice.actions;
export default dataSlice.reducer;