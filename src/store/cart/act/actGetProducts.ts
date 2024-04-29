import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const actGetProducts = createAsyncThunk("cart/actGetProducts", async (_, thunkAPI) => {
	const {rejectWithValue} = thunkAPI;
	try {
		const response = await axios.get("http://localhost:5005/products");
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return rejectWithValue(error.response?.data.message || error.message);
		}
	}
});
