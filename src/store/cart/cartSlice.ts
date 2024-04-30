import {createSlice} from "@reduxjs/toolkit";
import {actGetProducts} from "./act/actGetProducts";

type TProduct = {
	id: number;
	title: string;
	cat_prefix: string;
	img: string;
	price: string;
	quantity?: number;
};

interface IcartState {
	items: {[key: number]: number};
	productFullInfo: TProduct[];
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
}

const initialState: IcartState = {
	items: {},
	productFullInfo: [],
	loading: "idle",
	error: null,
};

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			if (!state.items[action.payload.id]) {
				state.items[action.payload.id] = 1;
			} else {
				state.items[action.payload.id] += 1;
			}
		},
		removeFromCart: (state, action) => {
			const id = action.payload;
			delete state.items[id];
		},
		cleanCart: (state) => {
			state.items = {};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(actGetProducts.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(actGetProducts.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.productFullInfo = action.payload;
		});
		builder.addCase(actGetProducts.rejected, (state, action) => {
			state.loading = "failed";
			state.error = action.error.message ?? null;
		});
	},
});

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;
export {actGetProducts};
