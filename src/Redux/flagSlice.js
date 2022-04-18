import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountry = createAsyncThunk("contries/getCountry", async () => {
  return fetch("https://restcountries.com/v3.1/all").then((data) =>
    data.json()
  );
});

export const flagSlice = createSlice({
  name: "contries",
  initialState: {
    countries: [],
    status: null,
    selectedTheme: "light",
  },
  reducers: {
    lightTheme: (state) => {
      state.selectedTheme = "light";
    },
    darkTheme: (state) => {
      state.selectedTheme = "dark";
    },
  },
  extraReducers: {
    [getCountry.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCountry.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.status = "done";
    },
    [getCountry.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const countriesResult = (state) => state.countryReducer;
export const { lightTheme, darkTheme } = flagSlice.actions;
export default flagSlice.reducer;
