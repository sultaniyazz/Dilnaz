import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalSideBarOpen: false,
  isNotificationOpen: false,
  showLoginModal: false,
  showSignUpModal: false
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isNotification: (state) => {
      state.isNotificationOpen = !state.isNotificationOpen;
    },
    modalSideBar: (state) => {
      state.modalSideBarOpen = !state.modalSideBarOpen
    },
    showLoginModal: (state) => {
      state.showLoginModal = !state.showLoginModal
    },
    showSignUpModal: (state) => {
      state.showSignUpModal = !state.showSignUpModal
    }
  },
});
export const { isNotification, modalSideBar, showLoginModal, showSignUpModal } = uiSlice.actions;
export default uiSlice.reducer;