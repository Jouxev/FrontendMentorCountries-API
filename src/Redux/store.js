import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import flagReducer from "./flagSlice";
import filterReducer from "./filterSlice";

export default configureStore({
  reducer: {
    countryReducer: flagReducer,
    filterSearchReducer: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
