import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../features/robotsSlice";
import usersReducer from "../features/robotsSlice";

const store = configureStore({
  reducer: {
    robots: robotsReducer,
    users: usersReducer,
  },
});

export default store;
