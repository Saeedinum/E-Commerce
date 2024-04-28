import {createSlice} from "@reduxjs/toolkit";

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
}

const initialState: IcartState = {
	items: {},
	productFullInfo: [],
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
});

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;
