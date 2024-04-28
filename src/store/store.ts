import {configureStore} from "@reduxjs/toolkit";
import Categories from "./Categories/categoriesSlice";
import Products from "./Products/productsSlice";
import cart from "./cart/cartSlice";

const store = configureStore({
	reducer: {
		categories: Categories,
		products: Products,
		cart: cart,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
