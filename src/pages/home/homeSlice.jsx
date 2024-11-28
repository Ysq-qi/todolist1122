import { createSlice } from "@reduxjs/toolkit";

// 定義初始狀態
const initialState = {
  Success: null,
  Error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers:{
  }
});

export default homeSlice.reducer;