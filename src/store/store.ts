import {configureStore, combineReducers} from "@reduxjs/toolkit";

import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";

import Categories from "./Categories/categoriesSlice";
import Products from "./Products/productsSlice";
import cart from "./cart/cartSlice";

const store = configureStore({
	reducer: persistReducer(
		{
			key: "root",
			storage,
			whitelist: ["cart"],
		},
		combineReducers({categories: Categories, products: Products, cart: cart}),
	),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
