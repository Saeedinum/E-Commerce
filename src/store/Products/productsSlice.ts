import {createSlice} from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
interface IState {
	records: {id: number; title: string; prefix: string; img: string}[];
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
}

const initialState: IState = {
	records: [],
	loading: "idle",
	error: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		productsCleanUp: (state) => {
			state.records = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(actGetProducts.pending, (state) => {
			state.loading = "pending";
			state.error = null;
		});
		builder.addCase(actGetProducts.fulfilled, (state, action) => {
			state.loading = "succeeded";
			state.records = action.payload;
		});
		builder.addCase(actGetProducts.rejected, (state, action) => {
			state.loading = "failed";
			if (action.payload && typeof action.payload === "string") {
				state.error = action.payload;
			}
		});
	},
});

export {actGetProducts};
export const { productsCleanUp } = productsSlice.actions;
export default productsSlice.reducer;
