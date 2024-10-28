import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SampleState } from "../home/home.types";

export const initialState: SampleState = {
  data: [],
  loading: false,
  error: null,
};

// Thunk to fetch data asynchronously
export const fetchSampleData = createAsyncThunk<SampleState["data"], void>(
  "sample/fetchSampleData",
  //If you don’t need to pass any specific payload when dispatching, you can ignore the first parameter by naming it _:
  async (_, { getState, rejectWithValue }) => {
    console.log(getState()); //gives you current state
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        let data = await response.json();
        data = data.slice(0, 5);
        console.log(data.length);
        console.log(data);
        return data;
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      return rejectWithValue("Failed to fetch data");
    }
  }
);

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSampleData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSampleData.fulfilled, (state, action: PayloadAction<SampleState["data"]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSampleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = sampleSlice.actions;
export default sampleSlice.reducer;
