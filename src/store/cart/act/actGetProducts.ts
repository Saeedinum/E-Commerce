import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@reduxjs/toolkit/query";
import axios from "axios";

export const actGetProducts = createAsyncThunk("cart/actGetProducts", async (_, thunkAPI) => {
	const {rejectWithValue, getState} = thunkAPI;
	const {cart} = getState() as RootState;
	const itemsID = Object.keys(cart.items)
		.map((el) => `id=${el}`)
		.join("&");
	try {
		const response = await axios.get(`http://localhost:5005/cart?${itemsID}`);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return rejectWithValue(error.response?.data);
		} else {
			return rejectWithValue(error);
		}
	}
});
