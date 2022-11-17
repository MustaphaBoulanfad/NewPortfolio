import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNavMobile: false,
  scrollDown: 0,
  expretises: [
    {
      id: 1,
      icon: "software",
      name: "Software Development",
      description:
        "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
    },
    {
      id: 2,
      icon: "react",
      name: "Frontend Dev ReactJS",
      description:
        "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, ReactJS framework.",
    },
  ],
};
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    toggleNavMobile: (state) => {
      state.showNavMobile = !state.showNavMobile;
    },
    changeScroll: (state, action) => {
      state.scrollDown = action.payload;
    },
  },
});

export const { toggleNavMobile, changeScroll } = portfolioSlice.actions;
export default portfolioSlice.reducer;
