import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Program } from "../interfaces/Program";

export const fetchPrograms = createAsyncThunk("game/fetchProgramsStatus", async () => {
  const response = await fetch(`https://api-moscow-mba.herokuapp.com/products`);
  const data = await response.json();
  return data;
});

interface ProgramState {
  items: Program[];
}
const initialState: ProgramState = {
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
