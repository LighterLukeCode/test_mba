import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchPrograms = createAsyncThunk("game/fetchProgramsStatus", async () => {
  const response = await fetch(`https://api-moscow-mba.herokuapp.com/products`);
  const data = await response.json();
  return data;
});

const initialState = {
  items: [],
};

const programsSlice = createSlice({
  name: "program",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchPrograms.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default programsSlice.reducer;
