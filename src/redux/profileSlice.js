import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name:"abc",
    age:98,
    address:"asdsadas"
    
  },
  reducers: {
    changeName: (state,action) => {
     return {...state,name:action.payload}
    },
    changeAge: (state,action) => {
     return {...state,age:action.payload}
    },
  },
});

export const { changeName, changeAge } =profileSlice.actions;

export default profileSlice.reducer;


