import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterResult: [],
    isFilter: false,
  },
  reducers: {
    filtring: (state, payload) => {
      state.filterResult = payload.payload;
      state.isFilter = true;
    },
    notFiltring: (state) => {
      state.filterResult = [];
      state.isFilter = false;
    },
  },
});
export const { filtring, notFiltring } = filterSlice.actions;
export const filtringState = (state) => state.filterSearchReducer;
export default filterSlice.reducer;
