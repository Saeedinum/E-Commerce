import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = {
	records: {id: number; title: string; prefix: string; img: string}[];
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
};

const actGetProducts = createAsyncThunk("products/actGetProducts", async (prefix: string, thunkAPI) => {
	const {rejectWithValue, getState} = thunkAPI;
	const {cart} = getState() as any;
});

export default actGetProducts;
