import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from "../features/categories/category-slice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
