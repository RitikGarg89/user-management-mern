import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
    getUsersApi,
    createUserApi,
    updateUserApi,
    deleteUserApi,
    deleteAllUsersApi
} from "./UsersApi.js";

const initialState = {
    users: [],
    isLoading: false,
    error: null
};

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getUsersApi();
            return response.data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch users"
            );
        }
    }
);

export const createUser = createAsyncThunk(
    "users/createUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await createUserApi(userData);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to create user"
            );
        }
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async ({ id, userData }, { rejectWithValue }) => {
        try {
            const response = await updateUserApi(id, userData);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to update user"
            );
        }
    }
)

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            await deleteUserApi(id);
            return id;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to delete user"
            );
        }
    }
)

export const deleteAllUsers = createAsyncThunk(
    "users/deleteAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await deleteAllUsersApi();
            return response.data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to delete all users"
            );
        }
    }

)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })

            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users.push(action.payload)
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;

                const index = state.users.findIndex(
                    user => user._id === action.payload._id
                );

                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = state.users.filter(
                    user => user._id !== action.payload._id
                );
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteAllUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteAllUsers.fulfilled, (state) => {
                state.isLoading = false;
                state.users = []
            })
            .addCase(deleteAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default userSlice.reducer;