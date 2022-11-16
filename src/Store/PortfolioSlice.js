import { createSlice } from "@reduxjs/toolkit";

const initialState = { showNavMobile: false };
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    toggleNavMobile: (state) => {
      state.showNavMobile = !state.showNavMobile;
    },
  },
});

export const { toggleNavMobile } = portfolioSlice.actions;
export default portfolioSlice.reducer;
