
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UsersSlice.js";

export const store = configureStore({
    reducer: {
        users: userReducer
    }
});
