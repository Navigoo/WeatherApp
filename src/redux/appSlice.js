import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showSidebar(state) {
      state.isSidebarOpen = true;
    },
    hideSidebar(state) {
      state.isSidebarOpen = false;
    }
  },
});

export const { showSidebar, hideSidebar } = appSlice.actions;
export default appSlice.reducer;
