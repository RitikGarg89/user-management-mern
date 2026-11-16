import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    selectedUser: null,
    isLoading: false,
    error: null
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;