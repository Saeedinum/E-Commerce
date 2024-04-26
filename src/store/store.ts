import {configureStore} from "@reduxjs/toolkit";
import Categories from "./Categories/categoriesSlice";

const store = configureStore({
	reducer: {
		categories: Categories,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
