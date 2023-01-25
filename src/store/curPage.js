import { createSlice } from "@reduxjs/toolkit";

const initialPageState = {
  curPage: 1,
  maxPage: 42,
  minPage: 1,
};

const curPageSlice = createSlice({
  name: "currentPage",
  initialState: initialPageState,
  reducers: {
    buttonClick(state, action) {
      state.curPage = action.payload;
    },
    rightArrowClick(state) {
      state.curPage =
        state.curPage < state.maxPage ? state.curPage + 1 : state.curPage;
    },
    leftArrowClick(state) {
      state.curPage =
        state.curPage > state.minPage ? state.curPage - 1 : state.curPage;
    },
  },
});

export const curPageActions = curPageSlice.actions;
export default curPageSlice.reducer;
