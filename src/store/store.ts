import {configureStore} from "@reduxjs/toolkit";
import Categories from "./Categories/categoriesSlice";
import Products from "./Products/productsSlice";

const store = configureStore({
	reducer: {
		categories: Categories,
		products: Products,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
