import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
  },
});

export default userSlice.reducer;

export const { logIn: logInActionCreator } = userSlice.actions;
